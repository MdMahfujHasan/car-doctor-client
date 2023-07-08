import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className='btn bg-orange-500 hover:bg-orange-600 border-0 mr-4 text-white'>{children}</button>
    );
};

export default PrimaryButton;