import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createContainer } from 'meteor/react-meteor-data';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import { Nodes } from '../api/nodes.js';

import BaseNode from './BaseNode.jsx';
import NodeEntryDialog from './NodeEntryDialog.js';
import NodeList from './NodeList.js';
import NodeListAppBar from './NodeListAppBar.js';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const style = {
  margin: 20,
  width: 800,
  textAlign: 'left',

};

export default class App extends Component {

  handleDeleteNode(nodeId) {
    console.log('delete node with id ',nodeId);
    Nodes.remove(nodeId);
  }

  handleOnConfirm(newNode) {
    console.log('confirmed', newNode );


    Nodes.insert({
      nodeName: newNode.nodeName,
      nodeType: newNode.nodeType,
      nodeContent: JSON.stringify(newNode),
      createdAt: new Date(), // current time
    });
  }

  render() {
    return (
      <MuiThemeProvider>
      <div>
      <NodeListAppBar/>
      <Paper style={style} zDepth={2} >

        <NodeEntryDialog onConfirm={this.handleOnConfirm}></NodeEntryDialog>

        <NodeList nodes={this.props.nodes} onDelete={this.handleDeleteNode}>
        </NodeList>
      </Paper>

      </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes =  {
  nodes: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    nodes: Nodes.find({}, {sort: {createdAt: -1}}).fetch(),
  };
}, App);
