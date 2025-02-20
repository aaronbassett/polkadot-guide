const toApTitleCase = (str: string): string => {
  const stopwords = "a an and at but by for in nor of on or so the to up yet".split(" ");
  const splitOn = /(\s+|[-‑–—,:;!?()])/;

  return str
    .split(splitOn)
    .map((word, index, all) => {
      if (index % 2) return word;
      const lower = word.toLowerCase();
      if (index !== 0 && index !== all.length - 1 && stopwords.includes(lower)) {
        return lower;
      }
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join("");
};

const slugify = (str: string | string[]): string => {
  if (Array.isArray(str)) {
    return str.map((s) => slugify(s)).join("-");
  }

  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "-")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export { slugify, toApTitleCase };
