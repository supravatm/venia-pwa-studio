import React from "react";

import { useParams } from "react-router-dom";
import HelloWorld from '../HelloWorld';

import { useState } from 'react';
import { useEffect } from "react";



const hi = {
    textAlign: "center",
    margin: "1rem",
};
const wave = {
    ...hi,
    fontSize: "5rem",
};

const GreetingPage = (props) => {
    const { who = "nobody" } = useParams();
    const [showHelloWorld, setShowHelloWorld] = useState(false);

    const handleButtonClick = () => {
        setShowHelloWorld(prevState => !prevState);
    };

    useEffect(() => {
        if (showHelloWorld) {
            const timer = setTimeout(() => {
                setShowHelloWorld(false);
            }, 3000);

            // Cleanup
            return () => clearTimeout(timer);
        }
    }, [showHelloWorld]);

    const Greeting = ({ name }) => {
        return <h1 style={hi}>Hello {name}!</h1>;
    };

    return (
        <div>
            <h1 style={hi}>Hello, {who}!</h1>
            <Greeting name={who} />
            <h1 style={wave}>{"\uD83D\uDC4B"}</h1>

            <button type="button" onClick={handleButtonClick}>
                {showHelloWorld ? 'Hide Welcome Message' : 'Show Welcome Message'}
            </button>

            {showHelloWorld && (
                <div style={hi}>
                    <HelloWorld />
                </div>
            )}



        </div>
    );
};

export default GreetingPage;