import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilterLanguage from './FilterLanguage';

configure({
    adapter: new Adapter()
});

describe('<FilterLanguage />', () => {
    it('should render 5 radio buttons', () => {
        const languagesFilter = ['en', 'ru'];
        const wrapper = shallow(<FilterLanguage languagesFilter={languagesFilter} changed={()=>{}} />);
        expect(wrapper.find('input[type="checkbox"]')).toHaveLength(5);
    });
});
