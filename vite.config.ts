const {defineConfig} = require('vite');
import {resolve} from 'path';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';

function pathResolve(dir) {
  return resolve(process.cwd(), '.', dir);
}

const viteEnv = {
  VITE_PORT: 5173,
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslint({
      include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue'],
    }),
  ],
  resolve: {
    // 配置路径别名
    alias: [
      {
        find: /@\//,
        replacement: pathResolve('src') + '/',
      },
    ],
  },
  server: {
    open: true, // 编译后自动启动浏览器
    hmr: {
      overlay: false, // 设置报错不显示在页面上
    },
    port: viteEnv.VITE_PORT,
  },
});
