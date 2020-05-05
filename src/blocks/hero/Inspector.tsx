import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { BlockEditProps } from '@wordpress/blocks';
import { Button, Icon, PanelBody } from '@wordpress/components';
import { useCallback } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { FC } from 'react';
import type { HeroAttributes } from 'src/blocks/hero';

type MediaSizes = Record<string, { width: number; url: string }>;

type Media = {
  id: number;
  url: string;
  sizes: MediaSizes;
  alt: string;
};

export const Inspector: FC<Pick<BlockEditProps<HeroAttributes>, 'attributes' | 'setAttributes'>> = ({
  attributes,
  setAttributes,
}) => {
  const { backgroundImage } = attributes;

  const onBackgroundImageSelect = useCallback(
    (media: Media) => {
      setAttributes({
        backgroundImage: {
          id: media.id,
          src: media.url,
          srcSet: Object.values(media.sizes)
            .map((value) => `${value.url} ${value.width}w`)
            .join(', '),
          alt: media.alt,
        },
      });
    },
    [setAttributes]
  );

  return (
    <InspectorControls>
      <PanelBody title={__('Background', 'zorrilla')} initialOpen={true}>
        <MediaUpload
          value={backgroundImage?.id}
          onSelect={onBackgroundImageSelect}
          render={({ open }) => (
            <div className="use-utilities">
              <Button
                onClick={open}
                className="relative w-full group border border-solid border-gray-300"
                style={{ paddingBottom: `${(9 / 16) * 100}%` }}
                aria-label="Change background"
              >
                <div className="absolute top-0 left-0 w-full h-full p-2">
                  {backgroundImage ? (
                    <img
                      className="object-cover object-center"
                      style={{ height: '100%', width: '100%' }}
                      src={backgroundImage.src}
                      srcSet={backgroundImage.srcSet}
                      alt={backgroundImage.alt}
                    />
                  ) : (
                    <span className="block h-full w-full bg-gray-200" />
                  )}
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <span className="absolute top-0 left-0 w-full h-full bg-black transition-opacity duration-300 opacity-0 group-hover:opacity-25"></span>
                  <Icon
                    className={classnames(
                      'relative text-white fill-current transition-opacity duration-300 opacity-0 group-hover:opacity-100',
                      { 'text-white': backgroundImage, 'text-black': !backgroundImage }
                    )}
                    icon={backgroundImage ? 'edit' : 'plus'}
                  />
                </div>
              </Button>
            </div>
          )}
        />
      </PanelBody>
    </InspectorControls>
  );
};
