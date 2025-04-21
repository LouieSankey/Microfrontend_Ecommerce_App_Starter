const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    
    mode: 'development',
    devServer: {
        port: 8081
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsIndex': './src/bootstrap',
            },
            shared: ['faker'],
            //if you want to use different versions of the same module, you can do so by adding the following:
            //shared: ['faker@5.5.3']
            //if you want to prevent different versions of the same module from being used, you can do so by adding the following:
            //shared: {
            //    faker: {
            //        singleton: true,
            //    }
            //}
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}