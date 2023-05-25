import React, { useState } from 'react';
import './OTPPage.css'; // Import the CSS file for styling

const OTPPage = () => {
  const [otp, setOTP] = useState('');
  const [showOTP, setShowOTP] = useState(false);

  const handleOTPChange = (e) => {
    setOTP(e.target.value);
  };

    const handleShowOTP = () => {
    setShowOTP(!showOTP);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation or further processing with the OTP
    console.log('Entered OTP:', otp);
  };

  return (
    <div className="otp-page">
    <h1>App Title</h1>
    <p className="instruction strong">Check your emailid.</p>
    <p className="instruction">If it is not your email,contact front office.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="otp-input">Enter OTP:</label>
          <input
            id="otp-input"
            type={showOTP ? "text" :"password"}
            value={otp}
            onChange={handleOTPChange}
            maxLength={4}
          />
        </div>
        <p className="instruction">If you have not received otp on your email even after 5 minustes please check your spam folder.This otp will be valid for 3 hours.</p>
        <div className="options">
          <button onClick={() => window.history.back()}>Close</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default OTPPage;
