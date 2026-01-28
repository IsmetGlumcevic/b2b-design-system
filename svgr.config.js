/** @type {import('@svgr/core').Config} */
module.exports = {
  typescript: true,
  icon: true,
  svgProps: {
    role: 'img',
  },
  replaceAttrValues: {
    '#000': 'currentColor',
    '#000000': 'currentColor',
    black: 'currentColor',
  },
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
    ],
  },
}
