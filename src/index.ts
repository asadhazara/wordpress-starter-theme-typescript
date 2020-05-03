import 'src/scss/index.scss';

// load app dynamically when DOM content loaded
window.addEventListener('DOMContentLoaded', async () => {
  const { default: focusSource } = await import(
    /* webpackPrefetch: true */
    /* webpackChunkName: "focus-source" */
    'ally.js/esm/style/focus-source'
  );

  // handle focus source for accessability
  focusSource();

  // menu component
  import(
    /* webpackPrefetch: true */
    /* webpackChunkName: "menu" */
    'src/components/menu'
  );
});
