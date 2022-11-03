import React, { memo, useEffect } from 'react';
// import { Drawer, Layout } from 'tdesign-react';
// import throttle from 'lodash/throttle';
// import { useAppSelector, useAppDispatch } from 'modules/store';
// import { selectGlobal, toggleSetting, toggleMenu, ELayout, switchTheme } from 'modules/global';
// import Setting from './components/Setting';
// import AppLayout from './components/AppLayout';
// import Style from './index.module.less';

import { Routes, Route } from 'react-router-dom';
import { Button } from 'antd';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Sidebar from './Sidebar';

const Test1 = React.memo(() => (
  <div>
    <Button>测试按钮1</Button>
    Test1
  </div>
));

const Test2 = React.memo(() => <div>Test2</div>);

export default memo(() => (
  <div>
    <Header />
    <div className='body'>
      <Content />
      <Sidebar />
    </div>
    <Footer />
  </div>
));
