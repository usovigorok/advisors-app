import React from 'react';

const statuses = [
    {
        value: -1,
        text: 'All'
    },
    {
        value: 0,
        text: 'Offline'
    },
    {
        value: 1,
        text: 'Online'
    }
]

const FilterStatus = (props) => {
    const {changed, statusFilter} = props;

    return (
        <div className="form-group row">
            <div className="col-sm-2">Filter by status</div>
            {
                statuses.map(current => {
                    const checked = (statusFilter === current.value);

                    return (
                        <div className="col-sm-2" key={current.value}>
                            <input
                                className="form-control"
                                type="radio"
                                name="status"
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

export default FilterStatus;

