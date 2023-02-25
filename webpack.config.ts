import webpack from "webpack";
import path from "path";
import buildWebpackConfig from "./config/build/build.webpack.config";
import { BuildModeType, BuildPaths } from "./config/build/types/config";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const mode: BuildModeType = "development";
const isDev = mode === "development";

const config: webpack.Configuration = buildWebpackConfig({
  mode,
  paths,
  isDev,
});

export default config;
