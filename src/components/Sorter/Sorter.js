import React from 'react';

const Sorter = (props) => {
    const {clicked} = props;

    return (
        <button onClick={clicked}>Sort</button>
    );
}

export default Sorter;