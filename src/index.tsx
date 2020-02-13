import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zh_CN}>
      <DndProvider backend={Backend}>
        <App />
      </DndProvider>
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
