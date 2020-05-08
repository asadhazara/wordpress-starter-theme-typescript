import 'src/scss/index.scss';
import 'src/scss/utilities.scss';
import 'objectFitPolyfill';

// load app dynamically when DOM content loaded
window.addEventListener('DOMContentLoaded', async () => {
  const { default: focusSource } = await import(
    /* webpackPrefetch: true */
    /* webpackChunkName: "focus-source" */
    'ally.js/esm/style/focus-source'
  );

  // handle focus source for accessability
  focusSource();

  // handle ofject fit of media
  window.objectFitPolyfill();

  // menu component
  import(
    /* webpackPrefetch: true */
    /* webpackChunkName: "menu" */
    'src/modules/menu'
  );
});
