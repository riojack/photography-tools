import React from 'react';

class LeafNode extends React.Component {
  render() {
    return <li>{`${this.props.name} : ${this.props.type}`}</li>;
  }
}

export default LeafNode;
