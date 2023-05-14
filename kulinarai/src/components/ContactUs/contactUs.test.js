import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ContactUs from './contactUs';

Enzyme.configure({ adapter: new Adapter() });

describe('ContactUs', () => {

    it('should render contact header', () => {
        const wrapper = shallow(<ContactUs />);
        expect(wrapper.find('.contact-header')).toHaveLength(1);
    });

    it('should render for-paragraph', () => {
        const wrapper = shallow(<ContactUs />);
        expect(wrapper.find('.for-paragraph')).toHaveLength(1);
    });

    it('should render contact by calling us section', () => {
        const wrapper = shallow(<ContactUs />);
        expect(wrapper.find('.contact').at(0).find('.contact-name').text()).toEqual('Contact by calling us');
        expect(wrapper.find('.contact').at(0).find('p')).toHaveLength(2);
    });

    it('should render our office section', () => {
        const wrapper = shallow(<ContactUs />);
        expect(wrapper.find('.contact').at(1).find('.contact-name').text()).toEqual('Our Office');
        expect(wrapper.find('.contact').at(1).find('p')).toHaveLength(1);
        expect(wrapper.find('.contact').at(1).find('.map-pic')).toHaveLength(1);
    });

    it('should render write us an email section', () => {
        const wrapper = shallow(<ContactUs />);
        expect(wrapper.find('.contact').at(2).find('.contact-name').text()).toEqual('Write us an email');
        expect(wrapper.find('.contact').at(2).find('p')).toHaveLength(3);
    });
});

