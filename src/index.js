import React from 'react';
import ReactDOM from 'react-dom';
import dva from './Dva';


import routes from './routes';


//定义dva的参数
const options = {
  initialState: {},
  //注册的models
  models: [],
  //注册的事件
  onAction: [],
  //异常处理，所有的异常都会通过这里
  onError(e) {
      console.log("Error", e);
  }
};
const app = dva(options);
const App = app.start(<Router/>);

ReactDOM.render(<App />, document.getElementById('root'));
