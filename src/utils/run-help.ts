import help, { type CommandSection } from "@root/.run-help.toml";
import chalk from "chalk";
import { toApTitleCase } from "./typography";
const filterBy = process.argv.slice(2);

const toList = (help: Record<string, CommandSection>) => {
  const sections = [];
  for (const [title, section] of Object.entries(help)) {
    sections.push({ title, section });
  }
  return sections;
};

const nameIncludes = (name: string, filterBy: string[]) => {
  for (const filter of filterBy) {
    if (name.toLowerCase().includes(filter.toLowerCase())) return true;
  }
  return false;
};

const filterHelp = (help: Record<string, CommandSection>, filterBy: string[]) => {
  const sections = toList(help);
  if (filterBy.length === 0) return sections;

  return sections.filter((section) => {
    if (nameIncludes(section.title, filterBy)) return true;

    for (const command of Object.values(section.section.commands)) {
      if (nameIncludes(command.name, filterBy)) return true;
      if (command.subcommands) {
        for (const subcommand of command.subcommands) {
          if (nameIncludes(`${command.name}${subcommand.name}`, filterBy)) return true;
        }
      }
    }

    return false;
  });
};

const levenshteinDistance = (str1: string, str2: string): number => {
  const m = str1.length;
  const n = str2.length;
  const dp: number[][] = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1] + 1, dp[i - 1][j] + 1, dp[i][j - 1] + 1);
      }
    }
  }
  return dp[m][n];
};

const findSimilarCommands = (help: Record<string, CommandSection>, needle: string) => {
  const results: Array<{ name: string; score: number }> = [];
  const normalizedNeedle = needle.toLowerCase();

  for (const section of Object.values(help)) {
    for (const command of Object.values(section.commands)) {
      // Add main command
      results.push({
        name: command.name,
        score: levenshteinDistance(command.name.toLowerCase(), normalizedNeedle),
      });

      // Add subcommands if they exist
      if (command.subcommands) {
        for (const subcommand of command.subcommands) {
          results.push({
            name: `${command.name}${subcommand.name}`,
            score: levenshteinDistance(
              `${command.name}${subcommand.name}`.toLowerCase(),
              normalizedNeedle,
            ),
          });
        }
      }
    }
  }

  return results.sort((a, b) => a.score - b.score);
};

const filteredHelp = filterHelp(help, filterBy);

const commandNameOutput = chalk.magenta;
const highlightNameOutput = chalk.white.bgMagenta.underline;

if (filteredHelp.length === 0) {
  const similarCommands = findSimilarCommands(help, filterBy[0]);
  console.log(chalk.red.bold(`help: '${filterBy.join(" ")}' is not a valid script`));
  if (similarCommands.length > 0 && similarCommands[0].score <= 3) {
    console.log(chalk.blue(`\nDid you mean: ${similarCommands[0].name}?`));
  }
} else {
  for (const section of filteredHelp) {
    console.log(chalk.green.bold(`\n## ${toApTitleCase(section.title)}`));
    console.log(section.section.description);

    for (const command of Object.values(section.section.commands)) {
      const outputName = nameIncludes(command.name, filterBy)
        ? highlightNameOutput(command.name)
        : commandNameOutput(command.name);
      console.log(`- ${outputName} - ${command.description}`);

      if (command.subcommands) {
        for (const subcommand of command.subcommands) {
          const outputName = nameIncludes(`${command.name}${subcommand.name}`, filterBy)
            ? highlightNameOutput(`${command.name}${subcommand.name}`)
            : commandNameOutput(`${command.name}${subcommand.name}`);
          console.log(`  - ${outputName} ${chalk.gray(`- ${subcommand.description}`)}`);
        }
      }
    }
  }
}
