import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from 'modules/store';
import App from 'layouts/index';

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import 'antd/dist/antd.css';

// import 'tdesign-react/es/style/index.css';
// import './styles/theme.less';
// import './styles/index.less';

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>,
    document.getElementById('app'),
  );
};

renderApp();
