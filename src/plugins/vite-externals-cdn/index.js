/**
 *
 * @param {object} options
 * @returns
 */

export default function viteExternalsCdn(options) {
  console.log(options);
  return {
    name: "vite-externals-cdn",
    config() {},
    transformIndexHtml(html) {
      const { modules } = options;
      const urls = modules.map((item) => ({
        tag: "script",
        attrs: { type: "module", src: item.url },
        injectTo: "head-prepend",
      }));
      return urls;
    },
  };
}
