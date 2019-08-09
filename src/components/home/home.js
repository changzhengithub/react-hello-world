import './home.scss';
import React, { Component } from 'react';
// import { Link } from "react-router-dom";

import Tab from '../common/tab/tab.js'

class Home extends Component {
  render() {
    return(
      <div className='home'>
        <header className='home-header'>
          <h1>我是入口组件APP</h1>
        </header>
        <main className='home-main'></main>
        <Tab />
      </div>
    )
  }
}

export default Home;

