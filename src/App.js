import React, {Component} from 'react';
import LightComponent from './LightComponent'
import Navbar from './Navbar'
import './App.css';

class App extends Component {
  render () {
  return (
    <div>
      <Navbar/>
      <LightComponent/>
    </div>
  );
}}

export default App;
