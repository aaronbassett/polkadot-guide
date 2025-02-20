import { cn } from "@/utils";
import { slugify } from "@/utils/typography";
import { type FC, createElement } from "react";
import type { ContentContainerProps, ContentProps } from "./types";

const Content: FC<ContentProps> = ({
  children,
  heading,
  subheading,
  className,
  size = "lg",
  as = "section",
}) => {
  const props = {
    className: cn(
      "prose min-w-auto md:min-w-lg lg:min-w-3xl xl:min-w-5xl mx-auto my-12",
      size === "sm" && "prose-sm",
      size === "base" && "prose-base",
      size === "lg" && "prose-lg",
      size === "xl" && "prose-xl",
      size === "2xl" && "prose-2xl",
      className,
    ),
  };

  return (
    <ContentContainer type={as} props={props}>
      {(heading || subheading) && (
        <div>
          {heading && (
            <h1 id={slugify(heading)}>
              <a
                href={`#${slugify(heading)}`}
                className="after:-left-5 relative no-underline after:absolute after:top-1 after:ml-2 after:text-[80%] after:text-accent after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out after:content-['#'] hover:after:opacity-100"
              >
                {heading}
              </a>
            </h1>
          )}
          {subheading && <h2>{subheading}</h2>}
        </div>
      )}
      {children}
    </ContentContainer>
  );
};

const ContentContainer: FC<ContentContainerProps> = ({ type, props, children }) => {
  return createElement(
    type,
    {
      ...props,
    },
    children,
  );
};

export default Content;
