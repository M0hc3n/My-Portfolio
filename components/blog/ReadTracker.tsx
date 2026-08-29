"use client";

import { useEffect } from "react";

import { trackEvent } from "@/components/analytics/track";

const READ_THRESHOLD = 0.75;

/**
 * Fires a single `blog_read` event once the visitor reaches 75% of the page.
 *
 * GA4's built-in scroll event only fires at 90% and carries no post identity,
 * so it cannot answer "which posts do people actually finish". This reports the
 * slug, and fires at most once per mount.
 *
 * A post shorter than the viewport scores 1 on the first check and counts as
 * read straight away, which is the intended reading of "nothing left to see".
 */
const ReadTracker = ({ slug, title }: { slug: string; title: string }) => {
  useEffect(() => {
    let fired = false;
    let frame = 0;

    const check = () => {
      frame = 0;
      if (fired) return;

      const { scrollHeight } = document.documentElement;
      if (scrollHeight <= 0) return;

      const progress = (window.scrollY + window.innerHeight) / scrollHeight;
      if (progress < READ_THRESHOLD) return;

      fired = true;
      trackEvent("blog_read", { blog_slug: slug, blog_title: title });
      window.removeEventListener("scroll", onScroll);
    };

    const onScroll = () => {
      // coalesce scroll bursts into one measurement per frame
      if (frame) return;
      frame = window.requestAnimationFrame(check);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    check();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [slug, title]);

  return null;
};

export default ReadTracker;
