import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AdvisorsList from './AdvisorsList';
import Advisor from '../Advisor/Advisor';

configure({
    adapter: new Adapter()
});

describe('<AdvisorsList />', () => {
    it('should render 2 <Advisor /> elements', () => {
        const advisors = [
            {
                "id": "031590e6-e94e-49a5-8d72-c65bcaecc820",
                "name": "Mr. Friedrich Shanahan",
                "numberOfReviews": 1082,
                "status": 0,
                "languages": [
                  "es",
                  "ru"
                ]
              },
              {
                "id": "57f5cbe4-8587-413f-afad-34ffd356b4a9",
                "name": "Adelle Huel",
                "numberOfReviews": 3394,
                "status": 0,
                "languages": [
                  "en"
                ]
              }
        ];

        const statusFilter = -1;
        const languagesFilter = ['en','ru','fr','de','es'];
        const wrapper = shallow(<AdvisorsList
            advisors={advisors}
            statusFilter={statusFilter}
            languagesFilter={languagesFilter}
        />);
        expect(wrapper.find(Advisor)).toHaveLength(2);
    });
});