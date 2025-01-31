// Why this file is here: https://github.com/vercel/next.js/discussions/70418#discussioncomment-10744133

import type { MDXComponents } from "mdx/types";

const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    ...components,
  };
};

export { useMDXComponents };
