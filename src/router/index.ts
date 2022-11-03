import React, { memo, lazy, Suspense } from 'react';

import { Routes, Route, BrowserRouterProps } from 'react-router-dom';

export interface IRouter {
  path: string;
  text: string;
  //   redirect?: string;
  Component: React.FC<BrowserRouterProps> | (() => any);
  /**
   * 当前路由是否全屏显示
   */
  //   isFullPage?: boolean;
  /**
   * meta未赋值 路由不显示到菜单中
   */
  //   meta?: {
  //     title?: string;
  //     Icon?: React.FC;
  //     /**
  //      * 侧边栏隐藏该路由
  //      */
  //     hidden?: boolean;
  //     /**
  //      * 单层路由
  //      */
  //     single?: boolean;
  //   };
  children?: IRouter[];
}

// interface IRenderRoutes = (routes: IRouter[], parentPath?: string, breadcrumbs?: string[]) => React.ReactNode[];

export const routes: IRouter[] = [
  {
    path: '/overview',
    text: '主页',
    Component: lazy(() => import('../pages/Overview')),
  },
  {
    path: '/archives',
    text: '归档',
    Component: lazy(() => import('../pages/Archives')),
    children: [
      {
        path: 'detail',
        text: '详情',
        Component: lazy(() => import('../pages/Detail')),
      },
    ],
  },
  {
    path: '/about',
    text: '关于',
    Component: lazy(() => import('../pages/About')),
  },
];
