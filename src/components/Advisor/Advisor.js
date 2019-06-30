import React, {Fragment} from 'react';
import {languagesData} from '../../config/config';

const getLanguageText = (language) => {
    const filtered = languagesData.filter(current => current.value === language);

    return (filtered.length > 0 && filtered[0].text) || "Unknown";
}

const Advisor = (props) => {
    const { advisor } = props;

    return (
        <Fragment>
                <hr />
                <div style={{ display: 'flex' }}>
                    <div>
                        <h2 style={{ marginTop: 0 }}>
                            {advisor.name}
                        </h2>
                        <p>Name: {advisor.name}</p>
                        <p>Number of Reviews: {advisor.numberOfReviews}</p>
                        <p>Status: {advisor.status === 1 ? 'Online' : 'Offline'}</p>
                        <p>Languages: {advisor.languages.map(language => getLanguageText(language)).join(', ')}</p>
                    </div>
                </div>
            </Fragment>
    );
}

export default Advisor;
