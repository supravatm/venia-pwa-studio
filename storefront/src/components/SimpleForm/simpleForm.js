import React, { useState } from 'react';

const SimpleForm = () => {
    const [formValues, setFormValues] = useState({
        fullName: '',
        email: '',
        date: ''
    });

    const [submittedValues, setSubmittedValues] = useState(null);

    const handleChange = event => {
        const { name, value } = event.target;

        setFormValues(previousValues => ({
            ...previousValues,
            [name]: value
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        setSubmittedValues(formValues);
        console.log(formValues);
    };

    console.log("submittedValues:   " + submittedValues);
    return (
        <div style={{ padding: '20px' }}>
            <h1>Simple Form Page</h1>

            <form>
                <div style={{ marginBottom: '12px' }}>
                    <label htmlFor="fullName">Full Name</label>
                    <br />
                    <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formValues.fullName}
                        onChange={handleChange}
                    />
                </div>

                <div style={{ marginBottom: '12px' }}>
                    <label htmlFor="email">Email Address</label>
                    <br />
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                </div>

                <div style={{ marginBottom: '12px' }}>
                    <label htmlFor="date">Date</label>
                    <br />
                    <input
                        id="date"
                        name="date"
                        type="date"
                        value={formValues.date}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>

            {submittedValues && (
                <div style={{ marginTop: '20px' }}>
                    <h2>Submitted Values</h2>
                    <p>
                        <strong>Full Name:</strong> {submittedValues.fullName}
                    </p>
                    <p>
                        <strong>Email Address:</strong> {submittedValues.email}
                    </p>
                    <p>
                        <strong>Date:</strong> {submittedValues.date}
                    </p>
                </div>
            )}
        </div>
    );
};

export default SimpleForm;