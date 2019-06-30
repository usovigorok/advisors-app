import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AdvisorsPage from './AdvisorsPage';
import AdvisorsList from '../../components/AdvisorsList/AdvisorsList';

configure({
    adapter: new Adapter()
});

describe('<AdvisorsPage />', () => {
    it('should render <AdvisorsList /> when list of advisors is not empty', () => {
        const wrapper = shallow(<AdvisorsPage />);
        wrapper.setState({
            error: false,
            isLoading: false,
            sortAsc: true,
            statusFilter: -1,
            languagesFilter: ['en'],
            advisors: [
                {
                  "id": "a6842b9a-dafe-44e4-922e-80bf07e18fed",
                  "name": "Palma Lind MD",
                  "numberOfReviews": 5084,
                  "status": 0,
                  "languages": [
                    "en"
                  ]
                }
            ]
        });
        expect(wrapper.find(AdvisorsList)).toHaveLength(1);
    });
});
