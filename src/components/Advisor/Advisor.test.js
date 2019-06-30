import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Advisor from '../Advisor/Advisor';

configure({
    adapter: new Adapter()
});

describe('<Advisor />', () => {
    it('should render advisor\'s name', () => {
        const advisor = {
            "id": "031590e6-e94e-49a5-8d72-c65bcaecc820",
            "name": "Mr. Friedrich Shanahan",
            "numberOfReviews": 1082,
            "status": 0,
            "languages": [
                "es",
                "ru"
            ]
        };

        const wrapper = shallow(<Advisor advisor={advisor} />);
        expect(wrapper.contains("Mr. Friedrich Shanahan")).toEqual(true);
    });
});