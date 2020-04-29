import App from "../pages/App.js"
import HomePage from '../pages/home/HomePage.js';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/app',
    component: App,
  },
]

export default routes;