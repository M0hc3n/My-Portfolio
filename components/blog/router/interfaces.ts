import React from "react";

import { BlogMeta } from "./blogs.meta";

export interface Blog extends BlogMeta {
  content: React.ReactNode;
}
