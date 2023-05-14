import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Filter from './Filter';

Enzyme.configure({ adapter: new Adapter() });

describe('Filter', () => {
  it('renders without crashing', () => {
    shallow(<Filter />);
  });

  it('should render the countries and categories sections', () => {
    const wrapper = shallow(<Filter />);
    expect(wrapper.find('.Filter').length).toEqual(2);
    expect(wrapper.find('.flag-container').length).toBeGreaterThan(0);
    expect(wrapper.find('.category-container').length).toBeGreaterThan(0);
  });

  it('should not show the meals section by default', () => {
    const wrapper = shallow(<Filter />);
    expect(wrapper.find('.meals')).toHaveLength(0);
  });
  it('should render the countries section', () => {
    const wrapper = shallow(<Filter />);
    expect(wrapper.find('.flag-container')).toHaveLength(28);
  });
  
  it('should render the categories section', () => {
    const wrapper = shallow(<Filter />);
    expect(wrapper.find('.category-container')).toHaveLength(11);
  });
});

