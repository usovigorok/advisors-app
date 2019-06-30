import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilterStatus from './FilterStatus';

configure({
    adapter: new Adapter()
});

describe('<FilterStatus />', () => {
    it('should render 3 radio buttons', () => {
        const statusFilter = -1;
        const wrapper = shallow(<FilterStatus statusFilter={statusFilter} changed={()=>{}} />);
        expect(wrapper.find('input[type="radio"]')).toHaveLength(3);
    });
});