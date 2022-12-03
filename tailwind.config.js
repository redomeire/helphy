module.exports = {
  content: ['./components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'taro-darkest': '#1F103C',
        'taro-darker': '#331B64',
        'taro-dark': '#48268C',
        'taro': '#5F33BA',
        'taro-light': '#7F4FE3',
        'taro-lighter': '#C2AFE9',
        'taro-lightest': '#F0EBFA',
      },
    },
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
