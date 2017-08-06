import React, { Component } from 'react';
import Tree from 'react-d3-tree';
import '../App.css';


  const myTreeData = [
      {
        name: 'Top Level',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
        children: [
          {
            name: 'Level 2: A',
            attributes: {
              keyA: 'val A',
              keyB: 'val B',
              keyC: 'val C',
            },
          },
          {
            name: 'Level 2: B',
          },
        ],
      },
    ];

  const translatePosition = {x: 450, y: 50}

/*<Tree /> will fill width/height of its container; in this case `#treeWrapper`*/

class ReactD3Tree extends Component {
  render() {
    return (

      <div id="treeWrapper" style={{width: '70vw', height: '75vh', 'padding-left': '15vw', 'padding-right': '15vw'}}>

        <Tree data={myTreeData} orientation="vertical" translate={translatePosition}/>

      </div>
    );
  }

}

export default ReactD3Tree;
