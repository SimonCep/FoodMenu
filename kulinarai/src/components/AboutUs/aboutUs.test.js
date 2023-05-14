import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Container, Row, Col } from 'react-bootstrap';
import AboutUs from './aboutUs';

Enzyme.configure({ adapter: new Adapter() });

describe('AboutUs component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AboutUs />);
  });

  it('should render a Container', () => {
    expect(wrapper.find(Container)).toHaveLength(1);
  });

  it('should render a Row', () => {
    expect(wrapper.find(Row)).toHaveLength(1);
  });

  it('should render three Col', () => {
    expect(wrapper.find(Col)).toHaveLength(3);
  });

  it('should have a header', () => {
    const header = wrapper.find('.about-header');
    expect(header).toHaveLength(1);
    expect(header.text()).toEqual('About Us');
  });

  it('should have a paragraph', () => {
    const paragraph = wrapper.find('.for-paragraph');
    expect(paragraph).toHaveLength(1);
    expect(paragraph.text()).toEqual('The website was created by the students of Kaunas University of Technology. They are all studying in informatics engineering and belong to IFIN-1/3. Their names are: Simas Čeponis, Justas Bujko, Tadas Lekerauskas. This website was created using agile methodology. Every member of the team has a few roles. Here is the information about us:');
  });

  it('should have three people with information', () => {
    const people = wrapper.find('.person');
    expect(people).toHaveLength(3);

    expect(people.at(0).find('.person-name').text()).toEqual('Simas Čeponis');
    expect(people.at(0).find('p').at(0).text()).toEqual('Roles: programmer, team leader');
    expect(people.at(0).find('p').at(1).text()).toEqual('E-Mail: simas.ceponis@ktu.edu');

    expect(people.at(1).find('.person-name').text()).toEqual('Justas Bujko');
    expect(people.at(1).find('p').at(0).text()).toEqual('Roles: programmer, product leader');
    expect(people.at(1).find('p').at(1).text()).toEqual('E-Mail: justas.bujko@ktu.edu');

    expect(people.at(2).find('.person-name').text()).toEqual('Tadas Lekerauskas');
    expect(people.at(2).find('p').at(0).text()).toEqual('Roles: programmer, designer');
    expect(people.at(2).find('p').at(1).text()).toEqual('E-Mail: tadas.lekerauskas@ktu.edu');
  });
});
