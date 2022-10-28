import React, { memo, useEffect } from 'react';
// import { Drawer, Layout } from 'tdesign-react';
// import throttle from 'lodash/throttle';
// import { useAppSelector, useAppDispatch } from 'modules/store';
// import { selectGlobal, toggleSetting, toggleMenu, ELayout, switchTheme } from 'modules/global';
// import Setting from './components/Setting';
import AppLayout from './components/AppLayout';
// import Style from './index.module.less';


import { Routes, Route, Navigate } from 'react-router-dom';

const Test1 = React.memo(() => {
  return (
    <div>Test1</div>
  )
})

const Test2 = React.memo(() => {
  return (
    <div>Test2</div>
  )
})



export default memo(() => {
  // const globalState = useAppSelector(selectGlobal);
  // const dispatch = useAppDispatch();

  // const AppContainer = AppLayout[globalState.isFullPage ? ELayout.fullPage : globalState.layout];
  // const AppContainer = AppLayout

  // useEffect(() => {
  //   dispatch(switchTheme(globalState.theme));
  //   const handleResize = throttle(() => {
  //     if (window.innerWidth < 900) {
  //       dispatch(toggleMenu(true));
  //     } else if (window.innerWidth > 1000) {
  //       dispatch(toggleMenu(false));
  //     }
  //   }, 100);
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    // <Layout className={Style.panel}>
    //   <AppContainer />
    //   <Drawer
    //     destroyOnClose
    //     visible={globalState.setting}
    //     size='458px'
    //     footer={false}
    //     header='页面配置'
    //     onClose={() => dispatch(toggleSetting())}
    //   >
    //     <Setting />
    //   </Drawer>
    // </Layout>
    <div>
      {/* <AppContainer/> */}

      {/* <Test1/>
      <Test2/> */}
      <Routes>
        {/* <Route path="/" element={<Test1/>} /> */}
        <Route path="/test1" element={<Test1/>} ></Route>
        <Route path="/test2" element={<Test2/>} ></Route>
      </Routes>

    </div>
  );
});
