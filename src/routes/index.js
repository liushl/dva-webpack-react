import App from "../pages/App.js"

const routes = [
  {
    path: '/',
    getComponent(nextState, cb) {
      import('../layouts/AppLayout').then(module => {
        cb(null, module.default);
      });
    },
    indexRoute: {
      getComponent(location, cb) {
        import('../pages/home/HomePage').then(module => {
          cb(null, module.default);
        });
      }
    },
  },
  {
    path: '/app',
    component: App,
  },
]

export default routes;