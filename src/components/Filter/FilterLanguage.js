import React from 'react';
import {languagesData} from '../../config/config';

const FilterLanguage = (props) => {
    const {changed, languagesFilter} = props;

    return (
        <div className="form-group row">
            <div className="col-sm-2">Filter by language</div>
            {
                languagesData.map(current => {
                    const checked = languagesFilter.indexOf(current.value) !== -1;

                    return (
                        <div className="col-sm-2" key={current.value}>
                            <input
                                className="form-control"
                                type="checkbox"
                                value={current.value}
                                onChange={changed}
                                defaultChecked={checked}
                            />
                            {current.text}
                        </div>
                    );
                })
            }
        </div>
    );
};

export default FilterLanguage;

