/*
|-------------------------------------------------------------------------------
| Development config                      https://maizzle.com/docs/environments
|-------------------------------------------------------------------------------
|
| This is the base configuration that Maizzle will use when you run commands
| like `npm run build` or `npm run dev`. Additional config files will
| inherit these settings, and can override them when necessary.
|
*/

/** @type {import('@maizzle/framework').Config} */
export default {
  build: {
    content: ['emails/**/*.html'],
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
  year: () => new Date().getFullYear(),
}
