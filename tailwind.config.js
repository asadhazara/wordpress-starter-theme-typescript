const config = {
  theme: {
    extend: {
      transitionDelay: {
        '0': '0ms',
      },
      height: {},
      inset: {
        half: '50%',
        full: '100%',
      },
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
};

module.exports = config; // eslint-disable-line
