const webpack = require('webpack');

module.exports = {
    head: {
        title: 'simplizm-template',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            //{ name: 'viewport', content: 'width=750px' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    css: [
        { src: '~assets/scss/style.scss', lang: 'scss' }
    ],
    mode: 'spa',
    loading: { color: '#3B8070' },
    srcDir: 'src/',
    build: {
        extend (config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery'
            })
        ]
    },
    router: {
        middleware: 'routerEach'
        //base: '/datepicker/'
    },
    modules: [
        ['nuxt-sass-resources-loader', [
            '~/assets/scss/_mixin.scss',
            '~/assets/scss/_variable.scss'
        ]]
    ],
    plugins: [
        '~/plugins/setWindowInfo',
        '~/plugins/componentsRegister'
    ]
}
