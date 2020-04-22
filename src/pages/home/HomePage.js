import React, { Component } from 'react'
import styles from './HomePage.less';

export default class HomePage extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>首页</div>
        <div className={styles.content}>content</div>
      </div>
    )
  }
}
