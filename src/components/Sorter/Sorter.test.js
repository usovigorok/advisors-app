import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sorter from './Sorter';

configure({
    adapter: new Adapter()
});

describe('<Sorter />', () => {
    it('should render a sort button', () => {
        const wrapper = shallow(<Sorter />);
        expect(wrapper.find('button')).toHaveLength(1);
        expect(wrapper.text()).toEqual('Sort');
    });
});