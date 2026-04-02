import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import { ConfigProvider } from 'antd';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={{ token: { colorPrimary: '#0C7A5E', colorInfo: '#07B07A' } }}>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);