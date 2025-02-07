type ValidAs = "section" | "div" | "article";

interface ContentProps {
  children: React.ReactNode;
  heading?: string;
  subheading?: string;
  className?: string;
  size?: "sm" | "base" | "lg" | "xl" | "2xl";
  as?: ValidAs;
}

interface ContentContainerProps {
  type: ValidAs;
  props: Record<string, string>;
  children: React.ReactNode;
}

export type { ContentContainerProps, ContentProps, ValidAs };
