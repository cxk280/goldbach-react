import React, { Component } from 'react';
import * as d3 from "d3";
import '../App.css';
import BarChart from './BarChart';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div>
          <p>Welcome to my visual exploration of the Goldbach Conjecture using D3 and React.</p>
        </div>
        <div>
          <BarChart data={[5,10,1,3]} size={[500,500]} />
        </div>
      </div>
    );
  }

}

export default App;
