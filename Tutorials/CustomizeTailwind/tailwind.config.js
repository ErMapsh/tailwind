module.exports = {
  content: ["*"],
  theme: {
    screens: {
      xsm: '500px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      spacing: {
        13: '3.25rem'
      },
      fontSize: {
        '13xl': ['13rem', { lineHeight: '1' }],
      },
      
    },
  },
  plugins: [],
}
