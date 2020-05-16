// @ts-check

import { BlockConfiguration } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { Image } from 'src/blocks/types/Image';

export type HeroAttributes = {
  backgroundImage?: Image;
  headline: string;
  text: string;
};

export const name = 'zorrilla/hero';

export const settings: BlockConfiguration<HeroAttributes> = {
  title: __('Hero'),
  description: __('Hero Banner Block.', 'zorrilla'),
  category: 'zorrilla',
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
