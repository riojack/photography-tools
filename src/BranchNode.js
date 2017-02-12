import React from 'react';
import LeafNode from './LeafNode';


function renderChild(child, index) {
  return <LeafNode key={index} {...child} />;
}

function renderChildren(children) {
  if (children && children.length > 0) {
    return <ul>
      { children.map(renderChild) }
    </ul>;
  }
}

class BranchNode extends React.Component {
  render() {
    return <li>
      {`${this.props.name} : ${this.props.type}`}
      {renderChildren(this.props.children)}
    </li>;
  }
}

export default BranchNode;
