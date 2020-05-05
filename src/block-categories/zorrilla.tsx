import { updateCategory } from '@wordpress/blocks';
import { Path, Rect, SVG } from '@wordpress/components';

updateCategory('zorrilla', {
  icon: (
    <div>
      <SVG
        className="use-utilities"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <Rect className="text-primary fill-current" width="20" height="20" />
        <Path
          className="text-white fill-current"
          d="M9.03226 13.6932H14.8495V16H5L10.957 6.32955H5.13978V4H15L9.03226 13.6932Z"
        />
      </SVG>
    </div>
  ),
});
