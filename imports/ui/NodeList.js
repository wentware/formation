import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import {List, ListItem} from 'material-ui/List';

import { Nodes } from '../api/nodes.js';

import BaseNode from './BaseNode.jsx';
import NodeEntryDialog from './NodeEntryDialog.js';

// App component - represents the whole app
export default class NodeList extends Component {

  handleDelete(nodeId) {
    this.props.onDelete(nodeId);
  }


  renderNodes() {
    return this.props.nodes.map((node) => {

      return <BaseNode
        key={node._id}
        nodeId={node._id}
        nodeName={node.nodeName}
        nodeType={node.nodeType}
        nodeContent={node.nodeContent}
        onDelete={this.handleDelete.bind(this)} />
    });
  }

  render() {
    return (
      <div>
      <List>
        {this.renderNodes()}
      </List>
      </div>
    )
  }
}

NodeList.propTypes =  {
  nodes: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
