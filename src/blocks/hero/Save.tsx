import { RichText } from '@wordpress/block-editor';
import type { BlockSaveProps } from '@wordpress/blocks';
import classnames from 'classnames';
import { ComponentType } from 'react';
import type { HeroAttributes } from 'src/blocks/hero';

const Save: ComponentType<BlockSaveProps<HeroAttributes>> = ({ attributes }) => {
  const { backgroundImage, headline, text } = attributes;

  return (
    <section>
      <div className={classnames('container py-24')}>
        <div className="row">
          <div className={classnames('col col--12 md:col--10')}>
            <RichText.Content className="mb-6" value={headline} tagName="h1" />
            <RichText.Content value={text} tagName="p" />
          </div>
        </div>
      </div>
      <div className={classnames('relative w-full', { 'bg-gray-200': !backgroundImage })} style={{ height: 500 }}>
        {backgroundImage && (
          <img
            className="absolute left-0 top-0 h-full w-full object-cover object-center"
            data-object-fit="cover"
            data-object-position="center"
            src={backgroundImage.src}
            srcSet={backgroundImage.srcSet}
            alt={backgroundImage.alt}
          />
        )}
      </div>
    </section>
  );
};

export default Save;
