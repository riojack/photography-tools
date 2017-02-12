import BranchNode from '../src/BranchNode';
import LeafNode from '../src/LeafNode';
import {expect} from 'chai';
import Chance from 'chance';
import {shallow} from 'enzyme';
import React from 'react';

describe('Branch Node tests', () => {
  let props,
    element,
    rng;

  function render() {
    element = shallow(<BranchNode {...props} />);
  }

  beforeEach('set up', () => {
    rng = new Chance();
    props = {
      type: rng.word(),
      name: rng.word(),
      children: [
        {type: rng.word(), name: rng.word()},
        {type: rng.word(), name: rng.word()},
        {type: rng.word(), name: rng.word()}
      ]
    };

    render();
  });

  it('should be a list item', () => {
    expect(element.type()).to.equal('li');
  });

  it('should have text that is the concatenation of props.name and props.type', () => {
    expect(element.children().at(0).text()).to.equal(`${props.name} : ${props.type}`);
  });

  it('should render a UL for its children', () => {
    expect(element.children()).to.have.length(2);
    expect(element.children().at(1).type()).to.equal('ul');
  });

  it('should not render a UL if there are no children', () => {
    props.children = [];
    render();

    expect(element.children().at(1).type()).to.equal(null);
    expect(element.children()).to.have.length(1);
  });

  it('should not render a UL if props.children is null', () => {
    props.children = null;
    render();

    expect(element.children().at(1).type()).to.equal(null);
    expect(element.children()).to.have.length(1);
  });

  it('should not render a UL if props.children is not an array', () => {
    props.children = 34;
    render();

    expect(element.children().at(1).type()).to.equal(null);
    expect(element.children()).to.have.length(1);
  });

  it('should render a LeafNode for each props.children inside the UL', () => {
    let ul = element.children().at(1);

    expect(ul.children()).to.have.length(props.children.length);

    ul.children().forEach((child, index) => {
      expect(child.type()).to.equal(LeafNode);
      expect(child.props()).to.eql(props.children[index]);
    });
  });
});
