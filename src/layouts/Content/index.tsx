import React, { memo, lazy, Suspense, ReactNode } from 'react';

import { Routes, Route } from 'react-router-dom';
import { routes, IRouter } from '../../router';

import Archives from 'pages/Archives';
import Details from 'pages/Detail';

export const renderRouter = (routers: IRouter[]) => {
  if (!routes.length) {
    return;
  }
  // eslint-disable-next-line consistent-return
  return routers.map((router, index) => {
    const { path, Component, children } = router;
    return (
      <Route key={index} path={path} element={<Component />}>
        {renderRouter(children || [])}
      </Route>
    );
  });
};

export default memo(() => (
  <div>
    <Suspense fallback={<div>加载中</div>}>
      <Routes>
        {/* {renderRouter(routes)} */}
        <Route path='/archives' element={<Archives />}>
          <Route path='/detail' element={<Details />}></Route>
        </Route>
      </Routes>
    </Suspense>

    {/* <Routes> */}
    {/* <Route path='/' element={<Test1 />} /> */}
    {/* <Route path='/test1' element={<Test1 />}></Route>
        <Route path='/test2' element={<Test2 />}></Route> */}
    {/* <Route path='/about' element={<About />}></Route>
      {renderRouter(routes)}
    </Routes> */}
  </div>
));
