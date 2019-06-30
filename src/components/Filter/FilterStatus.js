import React, {Fragment} from 'react';

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
        <div>
            Filter by status
            {
                statuses.map(current => {
                    const checked = (statusFilter === current.value);

                    return (
                        <Fragment key={current.value}>
                            <input
                                type="radio"
                                name="status"
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

export default FilterStatus;

