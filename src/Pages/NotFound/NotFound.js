import React from 'react';
import error from '../../images/error.jpg';
const NotFound = () => {
    return (
        <div className='m-5'>
            <img src={error} alt="" srcset="" />
            <h3>Please try again later!!</h3>
        </div>
    );
};

export default NotFound;