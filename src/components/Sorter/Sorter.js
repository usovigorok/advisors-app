import React from 'react';

const Sorter = (props) => {
    const {clicked, sortAsc} = props;
    const sortDir = sortAsc ? 'asc' : 'desc';

    return (
        <button type="button" className="btn mt-3 mb-3" style={{background: '#5B0149', color: '#fff'}} onClick={clicked}>Sort {sortDir}</button>
    );
}

export default Sorter;