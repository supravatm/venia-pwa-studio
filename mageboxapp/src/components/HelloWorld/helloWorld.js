// import React from 'react';
import React, { useState } from 'react';


const HelloWorld = () => {

    const [showMessage, setShowMessage] = useState(false);

    const handleButtonClick = () => {
        // setShowMessage(true);
        setShowMessage(prevState => !prevState);
    };
    return (
        <div style={{ padding: '20px' }}>
            <h1>Hello World</h1>

            {showMessage && (
                <p style={{ marginTop: '15px' }}>
                    Welcome to PWA Studio
                </p>
            )}
            <p style={{ marginTop: '15px' }}>This is my first custom PWA Studio page.</p>
            <button style={{ marginTop: '15px' }} onClick={handleButtonClick}>
                {showMessage ? 'Hide Welcome Message' : 'Show Welcome Message'}
            </button>
            {showMessage && (
                <p style={{ marginTop: '15px' }}>
                    Welcome to PWA Studio
                </p>
            )}
        </div>
    );
};

export default HelloWorld;