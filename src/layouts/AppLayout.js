import React, { Component } from 'react'
import styles from './AppLayout.less';

export default class AppLayout extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>我的差旅标准</div>
        <div className={styles.content}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
