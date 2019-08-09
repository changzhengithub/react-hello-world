import './detail.scss';
import React, { Component } from 'react';

class About extends Component {
  render() {
    return(
      <div className="detail">
        <header className="detail-header">
          <p>我是详情页</p>
        </header>
        <main className="detail-main">
          <div className="main-list">
            <div className="list-itme">我是详情列表</div>
            <div className="list-itme">我是详情列表</div>
            <div className="list-itme">我是详情列表</div>
          </div>
        </main>
      </div>
    )
  }
}

export default About;

