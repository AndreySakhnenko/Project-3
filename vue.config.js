const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  publicPath: "/Project-3/",
});

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.s(c|a)ss$/,
          use: [
            "vue-style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              // Requires >= sass-loader@^8.0.0
              options: {
                implementation: require("sass"),
                sassOptions: {
                  indentedSyntax: true, // optional
                },
              },
            },
          ],
        },
      ],
    },
  },
};

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          indentedSyntax: true,
        },
      },
    },
  },
};
