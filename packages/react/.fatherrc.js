export default {
  target: 'browser',
  cjs: { type: 'rollup', lazy: false },
  esm: { type: 'rollup' },
  extractCSS: true,
  disableTypeCheck: false,
};