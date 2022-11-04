import React, { memo, lazy, Suspense, ReactNode } from 'react';

import { Routes, Route } from 'react-router-dom';
import { routes, IRouter } from '../../router';

export const renderRouter = (routers: IRouter[], prefix = ''): JSX.Element[] => {
  if (!routes.length) {
    return [];
  }
  return routers.reduce((prev, router, index) => {
    const { path, Component, children } = router;
    const fullPath = prefix ? `${prefix}/${path}` : path;
    return prev
      .concat(<Route key={index} path={fullPath} element={<Component />}></Route>)
      .concat(renderRouter(children || [], fullPath));
  }, [] as JSX.Element[]);
};

export default memo(() => {
  console.log(renderRouter(routes));
  return (
    <div>
      <Suspense fallback={<div>加载中</div>}>
        <Routes>{renderRouter(routes)}</Routes>
      </Suspense>
    </div>
  );
});
