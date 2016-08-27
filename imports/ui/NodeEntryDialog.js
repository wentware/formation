import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const fbstyle = {
  marginRight: 10,
  marginLeft: 10,
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
};

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
var NodeEntryDialog = React.createClass({
  // state : {
  //   open: false
  // },

  getInitialState: function() {
    return (
      {
        open: false,
        selectedContentType: 'contentType',
      }
    )
  },

  handleOpen() {
    this.setState({open: true});
  },

  handleClose() {
    this.setState({open: false});
  },

  handleCloseConfirm() {
    var nodeNameText = this.refs.nodeNameText.getValue();
    var nodeTypeValue = this.state.selectedContentType;
    //console.log(nodeTypeValue);
    this.props.onConfirm({nodeName: nodeNameText, nodeType: nodeTypeValue});
    this.handleClose();
  },

  handleChange(event, index, value) {
    //console.log('handleChange', event, index, value);
    this.setState({
      selectedContentType: value,
    });
  },

  render() {
    //var openstate = this.state.open;

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleCloseConfirm}
      />,
    ];

    return (
      <div>
      <FloatingActionButton style={fbstyle} mini={true} onTouchTap={this.handleOpen}>
        <ContentAdd/>
      </FloatingActionButton>

        <Dialog
          title="Add a node"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >

          <TextField
            ref="nodeNameText"
            name="nodeNameText"
            defaultValue=""
            hintText="enter a node name"
          /><br />
          <SelectField ref="contentTypeValue" value={this.state.selectedContentType} onChange={this.handleChange}>
            <MenuItem value={"contentType"} primaryText="Content" />
            <MenuItem value={"textType"} primaryText="Text" />
            <MenuItem value={"binaryType"} primaryText="Image" />
          </SelectField><br />
        </Dialog>
      </div>
    );
  }
});

NodeEntryDialog.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  onConfirm: PropTypes.func.isRequired,
};

export default NodeEntryDialog;
