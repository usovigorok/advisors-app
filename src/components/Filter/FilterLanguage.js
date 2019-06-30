import React, {Fragment} from 'react';
import {languagesData} from '../../config/config';

const FilterLanguage = (props) => {
    const {changed, languagesFilter} = props;

    return (
        <div>
            Filter by language
            {
                languagesData.map(current => {
                    const checked = languagesFilter.indexOf(current.value) !== -1;

                    return (
                        <Fragment key={current.value}>
                            <input
                                type="checkbox"
                                value={current.value}
                                onChange={changed}
                                defaultChecked={checked}
                            />
                            {current.text}
                        </Fragment>
                    );
                })
            }
        </div>
    );
};

export default FilterLanguage;

