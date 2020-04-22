const routes = [
  {
    path: '/',
    getComponent(nextState, cb) {
      import('../pages/App').then(module => {
        cb(null, module.default);
      });
    },
  }]