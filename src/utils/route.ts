/**
 * 返回所有子路由
 */
const getChildrenRoutes = (routes: any) => {
  const result: any[] = [];
  routes.forEach((route: any) => {
    if (route.children && route.children.length > 0) {
      result.push(...route.children);
    }
  });
  return result;
};

/**
 * 处理脱离层级的路由：某个一级路由为其他子路由，则剔除该一级路由，保留路由层级
 * @param {*} routes router.getRoutes()
 */
export const filterRouters = (routes: any) => {
  const childrenRoutes = getChildrenRoutes(routes);
  return routes.filter((route: any) => {
    return !childrenRoutes.find(childrenRoute => {
      return childrenRoute.path === route.path;
    });
  });
};

/**
 * 判断数据是否为空值
 */
// function isNull(data: any) {
//   if (!data) return true;
//   if (JSON.stringify(data) === "{}") return true;
//   if (JSON.stringify(data) === "[]") return true;
//   return false;
// }

/**
 * 根据 routes 数据，返回对应 menu 规则数组
 */

export function generateMenus(routes: any[] = []) {
  const result: any[] = [];
  routes.forEach((route: any) => {
    // 如果没有meta.title 就直接遍历子路由
    // 如果有meta.title 就依次遍历添加到result中
    if (!route.meta || !route.meta.title) {
      result.push(...generateMenus(route.children));
    } else {
      const menu: any = {
        path: route.path,
        title: route.meta.title,
        icon: route.meta.icon
      };
      if (route.children && route.children.length > 0) {
        menu.children = generateMenus(route.children);
      }
      result.push(menu);
    }
  });
  console.log(result);

  return result;
}
