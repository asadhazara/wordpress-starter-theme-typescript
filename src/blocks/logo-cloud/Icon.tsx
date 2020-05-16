import { BlockIcon } from '@wordpress/blocks';
import { Rect, SVG } from '@wordpress/components';

const Icon: BlockIcon = () => {
  return (
    <SVG width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <Rect className="text-gray-400 fill-current" width="10" height="10" stroke="white" strokeWidth="1" />
      <Rect className="text-gray-400 fill-current" x="10" width="10" height="10" stroke="white" strokeWidth="1" />
      <Rect className="text-gray-400 fill-current" y="10" width="10" height="10" stroke="white" strokeWidth="1" />
      <Rect
        className="text-gray-400 fill-current"
        x="10"
        y="10"
        width="10"
        height="10"
        stroke="white"
        strokeWidth="1"
      />
    </SVG>
  );
};

export default Icon;
