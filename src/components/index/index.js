import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Tab from '../common/tab/tab.js'
import './index.scss';

class Index extends Component {
  
  render() {
    return(
      <div className="index">
        <header className="index-header">
          <p>我是index页面</p>
        </header>
        <main className="index-main">
          <div className="main-list">
            <div className="list-item">
              <Link to="/detail/3">detail</Link>
            </div>
            <div className="list-item">
              <Link to="/detail/4">detail</Link>
            </div>
            <div className="list-item">
              <Link to="/detail/5">detail</Link>
            </div>
          </div>
        </main>
        <Tab />
      </div>
    )
  }
}

export default Index;