/** @type {import('next').NextConfig} */
const { withModuleFederation } = require("@module-federation/nextjs-mf")

module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const mfConf = {
      name: "host",
      library: {
        type: config.output.libraryTarget,
        name: "host",
      },
      remotes: {
        aboutApp: "aboutApp",
        contactApp: "contactApp",
      },
      exposes: {
      },
    };
    config.cache = false;
    withModuleFederation(config, options, mfConf);

    return config;
  },

  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
}
