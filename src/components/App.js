import React, { Component } from 'react';
// import * as d3 from "d3";
import '../App.css';
// import BarChart from './BarChart';
// import TreeChart from './TreeChart';
import ReactD3Tree from './ReactD3Tree';

class App extends Component {

  //       <div>
  //         <BarChart data={[5,10,1,3]} size={[500,500]} />
  //       </div>
  //       <br />

  render() {
    return (
      <div className="App">
        <div>
          <p>Welcome to my visual exploration of the Goldbach Conjecture using D3 and React.</p>
        </div>
        <p>Top of graph</p>
        <div>
          <ReactD3Tree />
        </div>
        <p>Bottom of graph</p>
      </div>
    );
  }

}

export default App;
