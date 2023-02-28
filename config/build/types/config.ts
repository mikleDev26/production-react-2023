export type BuildModeType = "production" | "development";

export interface BuildEnv {
  mode: BuildModeType;
  port: number;
}

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface BuildOptions {
  mode: BuildModeType;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}
