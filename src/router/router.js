import React from 'react';
// as 把BrowserRouter命名为Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import Home from '../components/home/home'
import About from '../components/about/about'
import Index from '../components/index/index'
import Detail from '../components/detail/detail'

const Routes = () => (
  <Router>
    <Route exact path='/' component={Index}></Route>
    <Route path='/index' component={Index}></Route>
    <Route path='/about' component={About}></Route>
    <Route path='/detail/:id' component={Detail}></Route>
  </Router>
)

export default Routes