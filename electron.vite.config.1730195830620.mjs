// electron.vite.config.ts
import react from "@vitejs/plugin-react";
import { bytecodePlugin, defineConfig, externalizeDepsPlugin, swcPlugin } from "electron-vite";
import { resolve } from "path";
var electron_vite_config_default = defineConfig({
  main: {
    plugins: [
      externalizeDepsPlugin({ exclude: ["electron-store"] }),
      bytecodePlugin(),
      swcPlugin()
    ],
    build: {
      rollupOptions: {
        output: {
          format: "es"
        }
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin(), bytecodePlugin()],
    build: {
      rollupOptions: {
        output: {
          format: "es"
        }
      }
    }
  },
  renderer: {
    resolve: {
      alias: {
        "@renderer": resolve("src/renderer/src"),
        // /esm/icons/index.mjs only exports the icons statically, so no separate chunks are created
        "@tabler/icons-react": "@tabler/icons-react/dist/esm/icons/index.mjs"
      }
    },
    plugins: [react()]
  }
});
export {
  electron_vite_config_default as default
};
