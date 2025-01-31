// from: https://codehike.org/docs/code/callout
import type { AnnotationHandler, InlineAnnotation } from "codehike/code";

export const callout: AnnotationHandler = {
  name: "callout",
  transform: (annotation: InlineAnnotation) => {
    const { name, query, lineNumber, fromColumn, toColumn, data } = annotation;
    return {
      name,
      query,
      fromLineNumber: lineNumber,
      toLineNumber: lineNumber,
      data: { ...data, column: (fromColumn + toColumn) / 2 },
    };
  },
  Block: ({ annotation, children }) => {
    const { column } = annotation.data;
    return (
      <>
        {children}
        <div
          style={{ minWidth: `${column + 4}ch` }}
          className="relative mt-1 w-max whitespace-break-spaces rounded border border-current bg-zinc-800 px-2 text-center"
        >
          <div
            style={{ left: `${column}ch` }}
            className="-translate-y-1/2 -top-[1px] absolute h-2 w-2 rotate-45 border-current border-t border-l bg-zinc-800"
          />
          {annotation.query}
        </div>
      </>
    );
  },
};
