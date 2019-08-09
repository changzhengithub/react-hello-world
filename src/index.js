// 项目入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/router'
import * as serviceWorker from './serviceWorker';

// 引入reset css
import './assets/css/reset.css'

ReactDOM.render(<Router />, document.getElementById('root'));

serviceWorker.unregister();
