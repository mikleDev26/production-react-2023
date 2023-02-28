import webpack from "webpack";

import { BuildOptions } from "./types/config";
import buildLoaders from "./build.loaders";
import buildPlugins from "./build.plugins";
import buildResolvers from "./build.resolvers";
import { buildDevServer } from "./build.devServer";

export default function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode, isDev } = options;

  return {
    mode: mode,
    entry: paths.entry,

    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },

    module: {
      rules: buildLoaders(),
    },

    resolve: buildResolvers(),

    plugins: buildPlugins(options),

    devServer: buildDevServer(options),

    devtool: isDev ? "inline-source-map" : undefined,
  };
}
