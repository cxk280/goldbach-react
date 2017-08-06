import React, { Component } from 'react';
import '../App.css';
import * as d3 from 'd3';

class TreeChart extends Component {

   constructor(props){
      super(props)
      this.createTreeChart = this.createTreeChart.bind(this)
   }

   createTreeChart() {
      const treeData = {
         name: "/",
         contents: [
               {
                  name: "Applications",
                  contents: [
                      { name: "Mail.app" },
                      { name: "iPhoto.app" },
                      { name: "Keynote.app" },
                      { name: "iTunes.app" },
                      { name: "XCode.app" },
                      { name: "Numbers.app" },
                      { name: "Pages.app" }
                  ]
              },
              {
                  name: "System",
                  contents: []
              },
              {
                  name: "Library",
                  contents: [
                      {
                          name: "Application Support",
                          contents: [
                              { name: "Adobe" },
                              { name: "Apple" },
                              { name: "Google" },
                              { name: "Microsoft" }
                          ]
                      },
                      {
                          name: "Languages",
                          contents: [
                              { name: "Ruby" },
                              { name: "Python" },
                              { name: "Javascript" },
                              { name: "C#" }
                          ]
                      },
                      {
                          name: "Developer",
                          contents: [
                              { name: "4.2" },
                              { name: "4.3" },
                              { name: "5.0" },
                              { name: "Documentation" }
                          ]
                      }
                  ]
              },
              {
                  name: "opt",
                  contents: []
              },
              {
                  name: "Users",
                  contents: [
                      { name: "pavanpodila" },
                      { name: "admin" },
                      { name: "test-user" }
                  ]
              }
            ]
         };


      const tree = d3.layout.tree()
         .sort(null)
         // .size([this.props.size.height, this.props.size.width - this.props.maxLabelLength*options.fontSize])
         .size([this.props.size.height, this.props.size.width - this.props.maxLabelLength])
         .children(function(d)
      {
         return (!d.contents || d.contents.length === 0) ? null : d.contents;
      });

      const nodes = tree.nodes(treeData);
      const links = tree.links(nodes);

   /*
      <svg>
          <g class="container" />
      </svg>
   */
  var layoutRoot = d3.select("#bigContainer")
      .append("svg:svg").attr("width", this.props.size.width).attr("height", this.props.size.height)
      .append("svg:g")
      .attr("class", "container")
      .attr("transform", "translate(" + this.props.maxLabelLength + ",0)");


  // Edges between nodes as a <path class="link" />
  var link = d3.svg.diagonal()
      .projection(function(d)
      {
          return [d.y, d.x];
      });

  layoutRoot.selectAll("path.link")
      .data(links)
      .enter()
      .append("svg:path")
      .attr("class", "link")
      .attr("d", link);


  /*
      Nodes as
      <g class="node">
          <circle class="node-dot" />
          <text />
      </g>
   */
  var nodeGroup = layoutRoot.selectAll("g.node")
      .data(nodes)
      .enter()
      .append("svg:g")
      .attr("class", "node")
      .attr("transform", function(d)
      {
          return "translate(" + d.y + "," + d.x + ")";
      });

  nodeGroup.append("svg:circle")
      .attr("class", "node-dot")
      // .attr("r", options.nodeRadius);
      .attr("r", 5);

  nodeGroup.append("svg:text")
      .attr("text-anchor", function(d)
      {
          return d.children ? "end" : "start";
      })
      .attr("dx", function(d)
      {
          // var gap = 2 * options.nodeRadius;
          var gap = 2 * 5;
          return d.children ? -gap : gap;
      })
      .attr("dy", 3)
      .text(function(d)
      {
          return d.name;
      });

   }

   render() {
      return <svg id="bigContainer" ref={node => this.node = node}
         width={500} height={500}>
      </svg>
   }

}

export default TreeChart;
