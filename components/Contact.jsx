import { useState } from "react";

const Contact = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    return (
        <div className="form-container">
            <form className="form">
                <div className="form-group">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="form-input"
                        onChange={handleFirstName}
                        value={firstName}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="form-input"
                        onChange={handleLastName}
                        value={lastName}
                    />
                </div>
                <button type="submit" className="form-button">Submit</button>
            </form>
            <div className="form-output">
                <h3 className="output-title">Current Values:</h3>
                <p><strong>First Name:</strong> </p>
                <p><strong>Last Name:</strong> </p>
            </div>
        </div>
    );
};

export default Contact;
