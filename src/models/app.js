export default {

  namespace: 'app',

  state: {
    contact: null
  },

  reducers: {
    setContact(state, action) {
      return { ...state, contact: action.payload };
    },
  },

  effects: {
    * restoreToDefault({ payload }, { call, put }) {
      yield put({ type: 'setContact', payload: null });
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, query }) => {
        console.log('当前路径', pathname);
      });
    },
  },
};
