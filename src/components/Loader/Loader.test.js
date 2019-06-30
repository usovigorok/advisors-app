import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loader from './Loader';

configure({
    adapter: new Adapter()
});

describe('<Loader />', () => {
    it('should render a loading text', () => {
        const wrapper = shallow(<Loader />);
        expect(wrapper.find('div')).toHaveLength(1);
        expect(wrapper.text()).toEqual('Loading...');
    });
});