import React from 'react'
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import styles from './HomePage.less';


function HomePage({ isLogin, logout, onLogin }) {

  const onClickLogin = () => {
    if (isLogin) {
      logout();
    } else {
      onLogin({ account: 'admin', password: 'admin' });
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>首页</div>
      <div className={styles.content} onClick={onClickLogin}>
        {isLogin ? '退出登录' : '登录测试'}
      </div>
    </div>
  )
}


const mapStateToProps = (state) => ({
  isLogin: state.app.isLogin,
});

const mapDispathToProps = (dispatch) => ({
  changeUrl: (url) => {
    dispatch(routerRedux.push(url));
  },
  onLogin: (payload) => {
    dispatch({ type: 'app/userLogin', payload });
  },
  logout: (payload) => {
    dispatch({ type: 'app/userLogout', payload });
  },
});

export default connect(mapStateToProps, mapDispathToProps)(HomePage);
