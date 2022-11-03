import React, { memo, lazy, Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';
import { routes, IRouter } from '../../router';

export const renderRouter = (routers: IRouter[]) =>
  routers.map((router, index) => {
    const { path, text, Component } = router;
    return <Route key={index} path={router.path} element={<Component />} />;
    //     <Route key={index} path={router.path} element={<router.Component />
    //   }></Route>);
  });

export default memo(() => (
  <div>
    <Suspense fallback={<div>加载中</div>}>
      <Routes>{renderRouter(routes)}</Routes>
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
