import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { viteMockServe } from "vite-plugin-mock";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import importCdn from "./src/plugins/vite-externals-cdn/index.js";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/sometools",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      external: ["lodash-es"],
      output: {
        globals: {
          "lodash-es": "_",
        },
        entryFileNames(assetInfo) {
          // console.log("entry: ", assetInfo);
          return "js/[name].[hash].js";
        },
        chunkFileNames(assetInfo) {
          // console.log("chunk: ", assetInfo);
          return "js/[name].[hash].js";
        },
        assetFileNames(assetInfo) {
          if (assetInfo.name.endsWith(".worker.js")) console.log(assetInfo);
          // console.log(assetInfo);
          if (assetInfo.name.endsWith(".css")) {
            return "css/[name]-[hash][extname]";
          }
          return "img/[name]-[hash][extname]";
        },
      },
    },
  },
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      resolvers: [ElementPlusResolver()],
    }),
    viteMockServe({
      mockPath: "mock",
    }),
    // importCdn({
    //   modules: [
    //     {
    //       name: "lodash-es",
    //       url: "https://cdn.jsdelivr.net/npm/lodash@4.17.21/+esm",
    //     },
    //   ],
    // }),
  ],
});
