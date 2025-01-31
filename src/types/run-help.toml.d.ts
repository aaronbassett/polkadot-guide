declare module "@root/.run-help.toml" {
  interface Subcommand {
    name: string;
    description: string;
  }

  interface Command {
    name: string;
    description: string;
    urls?: string[];
    subcommands?: Subcommand[];
  }

  interface CommandSection {
    description: string;
    commands: Record<string, Command>;
  }

  const config: Record<string, CommandSection>;

  export default config;
  export type { Command, CommandSection, Subcommand };
}
