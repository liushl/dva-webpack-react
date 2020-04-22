import dva from 'dva';
import ReactDOM from 'react-dom';
import createLoading from 'dva-loading';
import { Router, useRouterHistory } from 'dva/router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';
import Home from '../src/pages/home/HomePage';


const history = useRouterHistory(createBrowserHistory)();

const RouterConfig = ({ history, app }) => {
  return <Router history={history} routes={routes} />;
};

// 1. Initialize`
const app = dva({
  history: history,
  initialState: {},
});

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/app').default);

// 4. Router
app.router(RouterConfig);

// 5. Start
const App = app.start();

ReactDOM.render(<App />, document.getElementById('root'));
