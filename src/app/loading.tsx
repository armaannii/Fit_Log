import React from 'react';

const loading = () => {
    return (
        <div className='text-center my-15 md:my-35 lg:my-50'>
            <span className="loading loading-bars loading-xl"></span>
            <span className="loading loading-bars loading-xl"></span>
            <span className="loading loading-bars loading-xl"></span>
        </div>
    );
};

export default loading;