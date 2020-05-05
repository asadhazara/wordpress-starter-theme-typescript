// @ts-check

import { BlockConfiguration } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

export type HeroAttributes = {
  backgroundImage?: { id: number; src: string; srcSet: string; alt: string };
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
  },
  getEditWrapperProps: () => ({ 'data-align': 'full' }),
};
