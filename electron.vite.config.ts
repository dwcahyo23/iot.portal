import react from '@vitejs/plugin-react'
import { bytecodePlugin, defineConfig, externalizeDepsPlugin, swcPlugin } from 'electron-vite'
import fixReactVirtualized from 'esbuild-plugin-react-virtualized'
import { resolve } from 'path'

export default defineConfig({
  main: {
    plugins: [
      externalizeDepsPlugin({ exclude: ['electron-store'] }),
      bytecodePlugin(),
      swcPlugin()
    ],
    build: {
      rollupOptions: {
        output: {
          format: 'es'
        }
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin(), bytecodePlugin()],
    build: {
      rollupOptions: {
        output: {
          format: 'es'
        }
      }
    }
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        // /esm/icons/index.mjs only exports the icons statically, so no separate chunks are created
        '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs'
      }
    },
    plugins: [react()],
    optimizeDeps: {
      esbuildOptions: {
        plugins: [fixReactVirtualized as import('vite/node_modules/esbuild/lib/main').Plugin]
      }
    },
    server: {
      proxy: {
        '/mqtt': {
          target: 'http://192.168.192.7:18083', // Backend API yang menerima permintaan
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/mqtt/, '')
        }
        // '/api/v1': {
        //   target: 'http://localhost:5001/api/v1',
        //   changeOrigin: true,
        //   secure: false,
        //   rewrite: (path) => path.replace(/^\/api\/v1/, '')
        // },
        // '/api/v5': {
        //   target: 'http://192.168.192.7:18083/api/v5/',
        //   changeOrigin: true,
        //   secure: false,
        //   rewrite: (path) => path.replace(/^\/api\/v5/, '')
        // }
      }
    }
  }
})
