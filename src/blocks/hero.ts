// @ts-check

import { BlockConfiguration } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

export type HeroAttributes = {
  backgroundImage?: { id: number; src: string; srcSet: string; alt: string };
  headline: string;
  text: string;
};

export const name = 'zorrilla/hero';

export const settings: BlockConfiguration<HeroAttributes> = {
  title: __('Hero'),
  description: __('Hero banner component.', 'zorrilla'),
  category: 'zorrilla',
  supports: { align: ['full'] },
  keywords: [__('Hero', 'zorrilla')],
  attributes: {
    backgroundImage: {
      type: 'object' as any,
    },
    headline: {
      type: 'string',
      source: 'html',
      selector: 'h1',
    },
    text: {
      type: 'string',
      source: 'html',
      selector: 'p',
    },
  },
  getEditWrapperProps: () => ({ 'data-align': 'full' }),
};
