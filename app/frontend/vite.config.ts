import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import ssr from 'vite-plugin-ssr/plugin'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        ssr(),
        Components({
            dts: true,
            extensions: ['vue'],
            dirs: ['src/components', '../../packages/bloc-components/src/components'],
            deep: true,
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            exclude: ['src/components/Widgets'],
        }),
    ],
    server: {
        open: true,
        port: 8004,
        host: '0.0.0.0',
        strictPort: true,
    },
});
