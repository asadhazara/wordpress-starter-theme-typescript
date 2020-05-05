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
      <div className={classnames('container', className)}>
        <div className="row">
          <div className={classnames('col')}>
            <h1 className="mb-4 mt-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quae.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ea id ullam explicabo incidunt voluptate
              impedit quisquam vero placeat officia.
            </p>
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
