import { defineConfig } from 'umi';
export default defineConfig({
  dva: {
    hmr: true,
  },
  dynamicImport: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      name: '个人中心',
      path: '/',
      component: '@/pages/AccountCenter',
    },
    {
      name: '监控页',
      path: '/dash',
      component: '@/pages/DashboardMonitor',
    },
  ],
  fastRefresh: {},
});
