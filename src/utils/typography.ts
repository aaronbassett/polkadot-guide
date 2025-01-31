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

export { toApTitleCase };
