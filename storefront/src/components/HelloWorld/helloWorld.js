// import React from 'react';
import React, { useState } from 'react';
import { useCmsBlock } from './telons/useCmsBlock';
import RichContent from '@magento/venia-ui/lib/components/RichContent';

const HelloWorld = () => {

    const [showMessage, setShowMessage] = useState(false);
    const { block } = useCmsBlock();
    const handleButtonClick = () => {
        // setShowMessage(true);
        setShowMessage(prevState => !prevState);
    };
    console.log("useCmsBlock", block);
    return (
        <div style={{ padding: '20px' }}>

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