import React, { Component } from 'react';
import Tree from 'react-d3-tree';
import '../App.css';


  let myTreeData = [
      // {
      //   name: 'Top Level',
      //   attributes: {
      //     keyA: 'val A',
      //     keyB: 'val B',
      //     keyC: 'val C',
      //   },
      //   children: [
      //     {
      //       name: 'Level 2: A',
      //       attributes: {
      //         keyA: 'val A',
      //         keyB: 'val B',
      //         keyC: 'val C',
      //       },
      //     },
      //     {
      //       name: 'Level 2: B',
      //     },
      //   ],
      // },
      {
        name: 'Even integers greater than 2 up to 100',
        children: [
          // {
          //   name: '4',
          //   children: [
          //     {
          //       name: '2 + 2'
          //     }
          //   ]
          // },
          // {
          //   name: '6',
          //   children: [
          //     {
          //       name: '3 + 3'
          //     }
          //   ]
          // }
        ]
      }
    ];

  function isPrime(n) {
      if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false;
      if (n === leastFactor(n)) return true;
      return false;
    }

    // leastFactor(n)
    // returns the smallest prime that divides n
    //     NaN if n is NaN or Infinity
    //      0  if n=0
    //      1  if n=1, n=-1, or n is not an integer

  function leastFactor(n){
     if (isNaN(n) || !isFinite(n)) return NaN;
     if (n === 0) return 0;
     if (n%1 || n*n<2) return 1;
     if (n%2 === 0) return 2;
     if (n%3 === 0) return 3;
     if (n%5 === 0) return 5;
     let m = Math.sqrt(n);
     for (let i=7;i<=m;i+=30) {
      if (n%i === 0)      return i;
      if (n%(i+4) === 0)  return i+4;
      if (n%(i+6) === 0)  return i+6;
      if (n%(i+10) === 0) return i+10;
      if (n%(i+12) === 0) return i+12;
      if (n%(i+16) === 0) return i+16;
      if (n%(i+22) === 0) return i+22;
      if (n%(i+24) === 0) return i+24;
     }
     return n;
    }

  let listOfPrimes = [];

  for (let i = 1; i < 20; i++) {
    if (isPrime(i) === true) {
      listOfPrimes.push(i);
    }
  }
  console.log('listOfPrimes: ',listOfPrimes);

  for (let i = 4; i <= 20; i+=2) {

    myTreeData[0].children.push({name: i, children: []});

    for (let j in listOfPrimes) {
      console.log('j: ',j);
      console.log('listOfPrimes[j]: ',listOfPrimes[j]);
      for (let k = listOfPrimes[listOfPrimes.length - 1]; k >= 0; k--) {
        if (listOfPrimes[j] + listOfPrimes[k] === i) {
          console.log('listOfPrimes[j], listOfPrimes[k], and i: ' + listOfPrimes[j] + ', ' + listOfPrimes[k] + ', ' + i);
          // myTreeData[0].children.children.push({name: listOfPrimes[j] + " + " + listOfPrimes[k]})
          myTreeData[0].children[(i/2)-2].children.push({name: listOfPrimes[j] + " + " + listOfPrimes[k]})
        }
      }
    }

  };

  console.log("blah");
  console.log("myTreeData: ",myTreeData);

  const translatePosition = {x: 450, y: 50}

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
