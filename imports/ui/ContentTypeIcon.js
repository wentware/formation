
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';

// Task component - represents a single todo item
var ContentTypeIcon = React.createClass( {

  render: function() {
    if (this.props.nodeType === 'contentType') {
      return <ContentInbox/>
    } else if (this.props.nodeType === 'binaryType') {
      return <ContentSend/>
    } else {
      return <ContentDrafts/>
    }
  }
});

ContentTypeIcon.propTypes = {
  nodeType: PropTypes.string.isRequired,
};

export default ContentTypeIcon;
