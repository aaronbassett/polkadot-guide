// Why this file is here: https://github.com/vercel/next.js/discussions/70418#discussioncomment-10744133

import { Code } from "@/components/codehike/Code";
import type { MDXComponents } from "mdx/types";

const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    ...components,
    Code,
  };
};

export { useMDXComponents };
