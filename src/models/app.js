
import { Toast } from 'antd-mobile';

export default {

  namespace: 'app',

  state: {
    isLogin: false,
  },

  reducers: {
    login(state, { payload }) {
      return { ...state, isLogin: payload };
    },
    logout(state, { payload }) {
      return { ...state, isLogin: false };
    },
  },

  effects: {
    * userLogin({ payload }, { call, put }) {
      const { account, password } = payload;
      if (account === "admin" && password === "admin") {
        yield put({ type: 'login', payload: true });
      } else {
        Toast.info("账号、密码错误");
      }
    },
    userLogout: [
      function* ({ payload }, { call, put }) {
        try {
          yield put({ type: 'logout' });
        } catch (error) {
          Toast.fail(error.errorMsg, 2);
        }
      }, { type: 'takeLatest' }
    ],
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, query }) => {
        console.log('当前路径', pathname);
      });
    },
  },
};
