/*
|-------------------------------------------------------------------------------
| Development config               https://maizzle.com/docs/environments/#local
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run the `maizzle build` or `maizzle serve` and it
| has the fastest build time, since most transformations are disabled.
|
*/

module.exports = {
  build: {
    posthtml: {
      expressions: {
        delimiters: ['[[', ']]']
      }
    },
    templates: {
      source: 'src/templates',
      destination: {
        path: 'build_local',
      },
    },
  },
  company: {
    name: '[Company Name, LLC]',
    address: `
    <br>1234 Street Rd.
    <br>Suite 1234
    `,
    product: '[Product Name]',
    sender: '[Sender Name]',
  },
  googleFonts: 'family=Nunito+Sans:wght@400;700',
  year: () => new Date().getFullYear(),
}
