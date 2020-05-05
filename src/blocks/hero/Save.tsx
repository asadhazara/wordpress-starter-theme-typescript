import type { BlockSaveProps } from '@wordpress/blocks';
import classnames from 'classnames';
import { ComponentType, Fragment } from 'react';
import type { HeroAttributes } from 'src/blocks/hero';

const Save: ComponentType<BlockSaveProps<HeroAttributes>> = ({ attributes }) => {
  const { backgroundImage } = attributes;

  return (
    <Fragment>
      <div className={classnames('container py-24')}>
        <div className="row">
          <div className={classnames('col-12 md:col-10')}>
            <h1 className="mb-6">
              We help brands and businesses achieve their goals, accelerate growth and win customers through web design
              and development.
            </h1>
            <p>Web design and development</p>
          </div>
        </div>
      </div>
      <div className="relative w-full bg-red" style={{ height: 500 }}>
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

export default Save;
