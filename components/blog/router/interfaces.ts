import React from "react";

export interface Blog {
  title: string;
  description: string;
  date: string;
  slug: string;
  image: string;
  content: React.ReactNode;
}
