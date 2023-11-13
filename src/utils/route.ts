export function filterRouters(routes: any[]) {
  return routes.map(route => {
    const item = {
      ...route,
      component: () => import(`@/views/${route.component}/index.vue`),
      children: route.children ? filterRouters(route.children) : []
    };
    return item;
  });
}
// 生成路由
export function generateMenus(routes: RouteRecordRaw[]) {
  return routes.map(route => {
    const item = {
      ...route,
      children: route.children ? generateMenus(route.children) : []
    };
    return item;
  });
}
