import LeafNode from '../src/LeafNode';
import {expect} from 'chai';
import Chance from 'chance';
import {shallow} from 'enzyme';
import React from 'react';

describe('Leaf Node tests', () => {
  let props,
    element,
    rng;

  beforeEach('set up', () => {
    rng = new Chance();
    props = {
      type: rng.word(),
      name: rng.word()
    };
    element = shallow(<LeafNode {...props} />);
  });

  it('should be a list item', () => {
    expect(element.type()).to.equal('li');
  });

  it('should have text that is the concatenation of props.name and props.type', () => {
    expect(element.children().at(0).text()).to.equal(`${props.name} : ${props.type}`);
  });
});
