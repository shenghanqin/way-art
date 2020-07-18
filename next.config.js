// next.config.js
const isProd = process.env.NODE_ENV === 'production'
const withStylus = require('@zeit/next-stylus')
const withCSS = require('@zeit/next-css')

module.exports = Object.assign(withStylus())
