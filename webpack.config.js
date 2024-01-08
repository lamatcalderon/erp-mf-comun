const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const { VueLoaderPlugin } = require('vue-loader')
const {TypedCssModulesPlugin} = require('typed-css-modules-webpack-plugin');
const path = require('path');

module.exports = (webpackConfigEnv) => {
    const defaultConfig = singleSpaDefaults({
        orgName: "sreasons",
        projectName: "erp-mf-comun",
        webpackConfigEnv,
    });

    const config = merge(defaultConfig, {
        resolve: {
            extensions: [".tsx", ".ts", ".vue", ".jsx", ".js", ".json"],
        },
        module: {
            rules: [
                {
                    test: /\.(json5?|ya?ml)$/, // target json, json5, yaml and yml files
                    type: 'javascript/auto',
                    include: [ // Use `Rule.include` to specify the files of locale messages to be pre-compiled
                      path.resolve(__dirname, 'src/assets/translations')
                    ],
                    use: [
                        {
                          loader: '@intlify/vue-i18n-loader',
                          options: {
                            forceStringify: true
                          }
                        }
                    ]
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'vue-style-loader',
                        //'style-loader',
                        'css-loader',
                        //'postcss-loader',
                        {
                          loader: 'sass-loader',
                          options: {
                            prependData: '@import "./src/scss/abstracts/_variables.scss";'
                          },
                        },
                    ],
                },
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    options: {
                      appendTsSuffixTo: [/\.vue$/],
                    },
                    exclude: /node_modules/
                },                
                {
                    test: /\.vue$/,
                    use: ["vue-loader"],
                }
            ],
        },
        externals: ['single-spa-vue',/^@sreasons\/.+/],
        plugins: [
            new VueLoaderPlugin(),
            new TypedCssModulesPlugin({
                globPattern: 'src/**/*.{css,scss,sass}',
                /*postCssPlugins: defaultPlugins => [
                  require('postcss')([
                    precss()
                  ]),
                  ...defaultPlugins,
                ],*/
              })
        ],
    });

    return config;
};
