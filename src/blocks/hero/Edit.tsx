import { RichText } from '@wordpress/block-editor';
import type { BlockEditProps } from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';
import classnames from 'classnames';
import { ComponentType } from 'react';
import type { HeroAttributes } from 'src/blocks/hero';
import { Inspector } from 'src/blocks/hero/Inspector';

const Edit: ComponentType<BlockEditProps<HeroAttributes>> = ({ attributes, setAttributes, className }) => {
  const { backgroundImage, headline, text } = attributes;

  return (
    <Fragment>
      <Inspector attributes={attributes} setAttributes={setAttributes} />
      <div className={classnames('container py-24', className)}>
        <div className="row">
          <div className={classnames('col col--12 md:col--10')}>
            <RichText
              className="mb-6"
              value={headline}
              tagName="h1"
              onChange={(headline) => setAttributes({ headline })}
              placeholder="Headline..."
            />
            <RichText value={text} tagName="p" onChange={(text) => setAttributes({ text })} placeholder="Text..." />
          </div>
        </div>
      </div>
      <div className={classnames('relative w-full', { 'bg-gray-200': !backgroundImage })} style={{ height: 500 }}>
        {backgroundImage && (
          <img
            className="absolute left-0 top-0 object-cover object-center"
            style={{ height: '100%', width: '100%' }}
            src={backgroundImage.src}
            srcSet={backgroundImage.srcSet}
            alt={backgroundImage.alt}
          />
        )}
      </div>
    </Fragment>
  );
};

export default Edit;
