import { Pre, type RawCode, highlight } from "codehike/code";
import { callout, className } from "./annotations";

export async function Code({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, "github-dark");
  return (
    <Pre code={highlighted} handlers={[callout, className]} className="border border-zinc-800" />
  );
}
