const useRem = false

module.exports = {
  parser: require('postcss-comment'),
  plugins: [
    require('postcss-import'),
    require('postcss-url')({ url: 'rebase' }),
    require('postcss-mixins'),
    require('postcss-simple-vars')({
      variables: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        transition: '150ms $ease-in-out',
        'color-black': '#030a1b',
        'color-yellow': '#ffcc48',
        'color-gray': '#86909d'
      }
    }),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    useRem
      ? require('postcss-pxtorem')({
          propList: ['*'],
          selectorBlackList: [/^html$/]
        })
      : require('postcss-rem-to-pixel')({ propList: ['*'] }),
    require('autoprefixer')
  ]
}
