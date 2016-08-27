import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';

import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import DeleteButton from 'material-ui/svg-icons/action/delete';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';

import ContentTypeIcon from './ContentTypeIcon.js';

var BaseNode = React.createClass( {
  getInitialState: function() {
    return (
      {
        nodeId: this.props.nodeId,
        nodeName: this.props.nodeName,
        nodeType: this.props.nodeType,
        nodeContent : this.props.nodeContent,
      }
    )
  },

  deleteNode: function(event) {
    console.log('delete node ', this.state.nodeId);
    this.props.onDelete(this.state.nodeId);
  },

  getNodeTypeIcon: function() {
    if (this.props.nodeType === 'contentType') {
      return <ContentInbox/>
    } else if (this.props.nodeType === 'binaryType') {
      return <ContentSend/>
    } else {
      return <ContentDrafts/>
    }
    //return <ContentTypeIcon nodeType={this.props.nodeType}/>
  },

  render: function() {
    return (
      <ListItem
        leftIcon={this.getNodeTypeIcon()}
        rightIcon={<DeleteButton onClick={this.deleteNode} color={red500}/>}
        key={this.props.nodeId}>
        {this.props.nodeName}
      </ListItem>
    )
  }
});

BaseNode.propTypes = {
  nodeId: PropTypes.string.isRequired,
  nodeName: PropTypes.string.isRequired,
  nodeType: PropTypes.string.isRequired,
  nodeContent: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default BaseNode;
