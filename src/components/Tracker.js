import React from 'react';
import './Tracker.css';

const Tracker = (props) => {
    return (
        <>
            <div className='wrapper-for-tracker'>
                <h2 className='category'>{props.heading}</h2>
                <h1 className='values'>{props.values}</h1>
            </div>
        </>
    )
}

export default Tracker;
