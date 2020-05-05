import type { BlockEditProps } from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';
import classnames from 'classnames';
import { ComponentType } from 'react';
import type { HeroAttributes } from 'src/blocks/hero';
import { Inspector } from 'src/blocks/hero/Inspector';

const Edit: ComponentType<BlockEditProps<HeroAttributes>> = ({ attributes, setAttributes, className }) => {
  const { backgroundImage } = attributes;

  return (
    <Fragment>
      <Inspector attributes={attributes} setAttributes={setAttributes} />
      <div className="use-utilities">
        <div className={classnames('container py-24', className)}>
          <div className="row">
            <div className={classnames('col md:col-10')}>
              <h1 className="mb-6">
                We help brands and businesses achieve their goals, accelerate growth and win customers through web
                design and development.
              </h1>
              <p>Web design and development</p>
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
      </div>
    </Fragment>
  );
};

export default Edit;
