import React from 'react';
import Advisor from '../Advisor/Advisor';

const filterByStatus = (advisors, statusFilter) => {
    return (statusFilter === -1)
        ? advisors
        : advisors.filter(current => {
            return current.status === statusFilter;
        });
}

const filterByLanguage = (advisors, languagesFilter) => {
    return advisors.filter(current => {
        const filtered = current.languages.filter(
            language => languagesFilter.includes(language)
        );
        return filtered.length > 0;
    });
}

const AdvisorsList = (props) => {
    const { advisors, statusFilter, languagesFilter } = props;
    let filteredAdvisors = filterByStatus(advisors, statusFilter);
    filteredAdvisors = filterByLanguage(filteredAdvisors, languagesFilter);

    return filteredAdvisors.map(advisor => {
        return (
            <Advisor key={advisor.id} advisor={advisor} />
        );
    });
}

export default AdvisorsList;
