import React from 'react';

const Sorter = (props) => {
    const {clicked} = props;

    return (
        <button type="button" className="btn btn-primary mt-3 mb-3" onClick={clicked}>Sort</button>
    );
}

export default Sorter;