import { BlockEditProps } from '@wordpress/blocks';
import { random, range } from 'lodash';
import { ComponentType } from 'react';
import { LogoCloudAttributes } from 'src/blocks/logo-cloud';

export const images = [
  process.env.PUBLIC_PATH + 'images/logo/eewager-partner-logo.png',
  process.env.PUBLIC_PATH + 'images/logo/appelman-partner-logo.png',
  process.env.PUBLIC_PATH + 'images/logo/adelaar-partner-logo.png',
  process.env.PUBLIC_PATH + 'images/logo/silvestre-partner-logo.png',
  process.env.PUBLIC_PATH + 'images/logo/leiden-universiteit-partner-logo.png',
];

const Edit: ComponentType<BlockEditProps<LogoCloudAttributes>> = () => {
  const randomIndex = random(images.length - 1);

  return (
    <div className="container py-16">
      <div className="row row--gutterless">
        {range(6).map((num) => {
          return (
            <div key={num} className="col col--6 md:col--4">
              <div
                className="relative bg-gray-100 border border-white border-solid"
                style={{ paddingBottom: (1 / 4) * 100 + '%' }}
              >
                <img
                  className="absolute h-full w-full"
                  src={images[(randomIndex + num) % images.length]}
                  alt="Zorrilla"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Edit;
