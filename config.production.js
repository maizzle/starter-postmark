module.exports = {
  build: {
    destination: {
      path: 'dist/production',
    },
  },

  inlineCSS: {
    enabled: true,
  },

  cleanup: {
    removeUnusedCSS: {
      enabled: true,
      uglify: true,
    },
    replaceStrings: {
      '\\s(style|class)(=""|(?=>)|(?=\\s))+': '', // remove empty style or class attributes
    },
  },

  minify: {
    enabled: true,
    minifyCSS: true,
    maxLineLength: 500,
    collapseWhitespace: true,
    processConditionalComments: true,
  },
}
