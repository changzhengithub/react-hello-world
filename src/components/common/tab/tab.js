import React from 'react'
import { Link } from 'react-router-dom'
import './tab.scss'

export default class Tab extends React.Component {

  render() {
    return (
      <div className='tab'>
        <div className="tab-item">
          <Link to="/index">Index</Link>
        </div>
        <div className="tab-item">
          <Link to="/about">About</Link>
        </div>
      </div>
    )
  }
}