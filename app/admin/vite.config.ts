import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: true,
      extensions: ['vue'],
      dirs: [
          'src/components',
          '../../packages/bloc-components/src/components'
      ],
      deep: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      exclude: [
          'src/components/Widgets'
      ],
    })
  ],
  server: {
    open: true,
    port: 8003,
    host: '0.0.0.0',
    strictPort: true,
  },
});
