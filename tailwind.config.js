/* eslint-disable */
const { map } = require('lodash');
const plugin = require('tailwindcss/plugin');
/* eslint-enable */

const config = {
  important: '#wpbody',
  purge: {
    content: ['templates/**/*.twig', 'src/**/*.{ts,tsx}'],
  },
  theme: {
    extend: {
      fontFamily: {
        openSans: '"Open Sans", sans-serif',
        poppins: '"Poppins", sans-serif',
      },
      inset: (theme) => ({
        half: '50%',
        full: '100%',
        2: theme('space.2'),
        4: theme('space.4'),
        6: theme('space.6'),
      }),
      opacity: {
        60: '0.6',
      },
      padding: {
        '1/3': `${(1 / 3) * 100}%`,
        '1/2': `${(1 / 2) * 100}%`,
        '3/4': `${(3 / 4) * 100}%`,
      },
      transitionDelay: {
        '0': '0ms',
      },
      zIndex: {
        '-1': '-1',
        '1': '1',
      },
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      transparent: 'transparent',
      primary: '#F42C04',
      black: '#000000',
      white: '#FFFFFF',
      blue: '#479FFA',
      green: {
        default: '#3AA76D',
        '100': '#F0F9F4',
        '200': '#F0F9F4',
        '300': '#AEDDC2',
        '400': '#73C496',
        '500': '#3AA76D',
        '600': '#368759',
        '700': '#2B6B46',
        '800': '#1C472F',
      },
      yellow: {
        default: '#FFC043',
        '100': '#FFFAF0',
        '200': '#FFF2D9',
        '300': '#FFE3AC',
        '400': '#FFCF70',
        '500': '#FFC043',
        '600': '#BC8B2C',
        '700': '#997328',
        '800': '#664D1B',
      },
      red: {
        default: '#D44333',
        '100': '#FDF0EF',
        '200': '#FADBD7',
        '300': '#F4AFA7',
        '400': '#EB7567',
        '500': '#D44333',
        '600': '#AE372A',
        '700': '#AE372A',
        '800': '#5C1D16',
      },
      brown: {
        default: '#99644C',
        '100': '#F7F3F1',
        '200': '#EBE0DB',
        '300': '#D2BBB0',
        '400': '#B18977',
        '500': '#99644C',
        '600': '#744C3A',
        '700': '#5C3C2E',
        '800': '#3D281E',
      },
      orange: {
        default: '#ED6E33',
        '100': '#FEF3EF',
        '200': '#FBE2D6',
        '300': '#F7BFA5',
        '400': '#F19164',
        '500': '#ED6E33',
        '600': '#B45427',
        '700': '#8E421F',
        '800': '#5F2C14',
      },
      purple: {
        default: '#7356BF',
        '100': '#F4F1FA',
        '200': '#E3DDF2',
        '300': '#C1B5E3',
        '400': '#957FCE',
        '500': '#7356BF',
        '600': '#574191',
        '700': '#453473',
        '800': '#2E224C',
      },
      gray: {
        default: '',
        '100': '#F6F6F6',
        '200': '#EEEEEE',
        '300': '#E2E2E2',
        '400': '#CBCBCB',
        '500': '#AFAFAF',
        '600': '#757575',
        '700': '#545454',
        '800': '#333333',
      },
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
};

module.exports = config; // eslint-disable-line
