import './about.scss';
import React, { Component } from 'react';
import Tab from '../common/tab/tab.js'

class About extends Component {
  render() {
    return(
      <div className="about">
        <header className="about-header">
          <p>Edit <code>src/App.js</code> and save to reload.</p>
        </header>
        <Tab />
      </div>
    )
  }
}

export default About;

