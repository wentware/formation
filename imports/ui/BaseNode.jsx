import React, { Component, PropTypes } from 'react';

// Task component - represents a single todo item
export default class BaseNode extends Component {
  render() {
    return (
      <div class="panel">
      <div class="nodeId">{this.props.baseNode.nodeId}</div>
      <div class="nodeName">{this.props.baseNode.nodeName}</div>
      <div class="nodeType">{this.props.baseNode.nodeType}</div>
      </div>
    );
  }
}

BaseNode.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  nodeId: PropTypes.string.isRequired,
  nodeName: PropTypes.string.isRequired,
  nodeType: PropTypes.string.isRequired,
  nodeContent: PropTypes.object
};
