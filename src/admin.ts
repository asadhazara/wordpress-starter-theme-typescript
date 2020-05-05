import 'src/scss/admin.scss';
import 'src/scss/utilities.scss';
import 'src/block-categories/zorrilla';

import { registerBlockType } from '@wordpress/blocks';

const context = require.context('src/blocks', true, /.ts$/);
const iconContext = require.context('src/blocks', true, /Icon\.tsx$/);
const editContext = require.context('src/blocks', true, /Edit\.tsx$/);
const saveContext = require.context('src/blocks', true, /Save\.tsx$/);
const deprecatedContext = require.context('src/blocks', true, /deprecated\.tsx$/);

// Register all the blocks found.
context.keys().forEach((key) => {
  const block = context(key);

  const settings = {
    ...block.settings,
  };

  try {
    settings.icon = iconContext(`${key.replace('.ts', '')}/Icon.tsx`).default;
  } catch (err) {
    //
  }

  try {
    settings.edit = editContext(`${key.replace('.ts', '')}/Edit.tsx`).default;
  } catch (err) {
    //
  }

  try {
    settings.save = saveContext(`${key.replace('.ts', '')}/Save.tsx`).default;
  } catch (err) {
    //
  }

  try {
    settings.deprecated = deprecatedContext(`${key.replace('.ts', '')}/deprecated.tsx`).default;
  } catch (err) {
    //
  }

  if (block.name) {
    registerBlockType(block.name, settings);
  }
});
