// @ts-check

import { BlockConfiguration } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { Image } from 'src/blocks/types/Image';

export type LogoCloudAttributes = {
  logos: Image[];
};

export const name = 'zorrilla/logo-cloud';

export const settings: BlockConfiguration<LogoCloudAttributes> = {
  title: __('Logo Cloud'),
  description: __('Logo Cloud Block.', 'zorrilla'),
  category: 'zorrilla',
  keywords: [__('Logo Cloud', 'zorrilla')],
  attributes: {
    logos: {
      type: 'array',
      default: [],
    },
  },
  getEditWrapperProps: () => ({ 'data-align': 'full' }),
};
