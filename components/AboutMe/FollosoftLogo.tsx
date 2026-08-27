import * as React from "react";

// Follosoft's compact mark -- the "FS" monogram they use as their favicon
// (https://follosoft.com/favicon.ico), which ships only as a 32x32 raster.
// Rebuilt here as vector so it stays sharp at any size: the F and S are the
// real glyphs lifted from their wordmark
// (/images/logos/Follosoft-Logo-White-Green.svg), placed on the navy disc with
// one shared scale, matched to the favicon's measured proportions -- pair width
// 23/32 of the disc and the F/S overlap 2/23 of that.
const FollosoftLogo = () => (
  <svg
    className="h-8 w-8"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    role="img"
    aria-label="Follosoft"
  >
    <circle cx="32" cy="32" r="32" fill="#021F47" />
    <g transform="translate(1.94 9.13) scale(0.4739)">
      <polygon fill="#FFFFFF" points="14.9,16.7 14.9,79.7 32.4,79.7 32.4,57.2 62.1,57.2 62.1,42.7 32.4,42.7 32.4,32 65.3,32 65.3,16.7" />
      <path
        fill="#BCD74A"
        transform="translate(-182.04 0)"
        d="M238.9,70.3l9.7-11.6c6.2,4.9,13.1,7.6,20.4,7.6c4.7,0,7.2-1.6,7.2-4.3v-0.2c0-2.6-2.1-4-10.6-6 c-13.4-3.1-23.7-6.8-23.7-19.8v-0.2c0-11.7,9.3-20.1,24.4-20.1c10.7,0,19.1,2.9,25.9,8.4l-8.7,12.3c-5.8-4-12-6.2-17.6-6.2 c-4.2,0-6.3,1.8-6.3,4v0.2c0,2.9,2.2,4.1,10.9,6.1c14.5,3.1,23.5,7.8,23.5,19.6v0.2c0,12.9-10.2,20.5-25.4,20.5 C257.3,80.7,246.7,77.2,238.9,70.3"
      />
    </g>
  </svg>
);

export default FollosoftLogo;
