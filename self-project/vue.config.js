
// vue config.js
module.exports = {
    devServer: {
        port: 8081,
        host: 'localhost',
        open: true,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:2019',
                secure: false,
                changeOrigin: true,
                pathRewrite:{'^/api':''}
            }
        }
    }
}