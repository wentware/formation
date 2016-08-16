import React, { Component } from 'react';

import Task from './Task.jsx';
import BaseNode from './BaseNode.jsx';

// App component - represents the whole app
export default class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }

  getNodes() {
      return [
        { _id: 1, nodeName: 'This is node 1', nodeType: 'contentNode' },
        { _id: 2, nodeName: 'This is node 2', nodeType: 'contentNode' },
        { _id: 3, nodeName: 'This is node 3', nodeType: 'contentNode' },
      ];
    }

    renderTasks() {
      return this.getTasks().map((task) => (
        <Task key={task._id} task={task} />
      ));
    }

    renderNodes() {
        return this.getNodes().map((node) => (
          <li><BaseNode key={node._id} nodeContent={node} nodeName={node.nodeName} nodeId={node._id} nodeType={node.nodeType} /></li>
        ));
    }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Node List</h1>
        </header>

        <ul>
          {this.renderNodes()}
        </ul>
      </div>
    );
  }
}
