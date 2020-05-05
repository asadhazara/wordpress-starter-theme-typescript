import { BlockIcon } from '@wordpress/blocks';
import { Rect, SVG } from '@wordpress/components';

const Icon: BlockIcon = () => {
  return (
    <SVG className="use-utilities" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <Rect
        className="stroke-current text-black"
        x="1"
        y="1"
        width="18"
        height="18"
        rx="3"
        fill="none"
        strokeWidth="2"
      />
    </SVG>
  );
};

export default Icon;
