import React from 'react';
import styled from 'styled-components';
import { shallow } from 'enzyme';
import 'jest-styled-components'

// Components
import Image from '../image';

function setup() {
  const props = {
    image: 'http://eeweb.poly.edu/~yao/EL5123/image/lena_gray.bmp',
  };
  const wrapper = shallow(<Image />);
  return { wrapper, props };
}

describe('WelcomeMessage Test Suite', () => {
  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('img').exists()).toBe(true);
  });
});