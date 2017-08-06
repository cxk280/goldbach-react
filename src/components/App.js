import React, { Component } from 'react';
// import * as d3 from "d3";
import '../App.css';
import BarChart from './BarChart';
import TreeChart from './TreeChart';

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
        <br />
        <div>
          <p>This is the top of TreeChart div.</p>
          <TreeChart />
          <p>This is the bottom of TreeChart div.</p>
        </div>
      </div>
    );
  }

}

export default App;
