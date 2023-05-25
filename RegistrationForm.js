import React, { useState } from 'react';

export default function RegistrationForm() {
  return (
    <form>
    <body>
      <div className="container card p-3 mt-2 register-container">
           <h1>Registration Form</h1>
        <label htmlFor="email">Email ID:</label>
        <input
          type="email"
          name="email"
          required
        />
        
          <button type="button">
            Verify Email
          </button>
      </div>
      <div className="container card p-3 mt-2 register-container ">
        <label htmlFor="country">Select Your Country:</label>
        <select
          id="country"
          required
        >
          <option value="">Select a country</option>
          <option value="USA">United States</option>
          <option value="UK">United Kingdom</option>
          <option value="Canada">Canada</option>
          <option value="IND">India</option>
          <option value="JP">Japan</option>
          <option value="China">China</option>
          
        </select>
      </div>
      <div className="container card p-3 mt-2 register-container">
        <label htmlFor="languages"> Languages: </label>
        <select
          id="languages"
          
          required
        > 
          <option value="">Select Your Language</option>
          <option value="english">English</option>
          <option value="kanada">Kanada</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
          <option value="german">German</option>
          
        </select>
      </div>
      <div className="container card p-3 mt-2 register-container">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          required
        />
      </div>
      <div className="container card p-3 mt-2 register-container">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          required
        />
      </div>
      <div className="container card p-3 mt-2 register-container">
        <input type="checkbox" id="eula" required />
        <label htmlFor="eula">I agree to the End User License Agreement</label>
      </div>
      <div className="container card p-3 mt-2 register-container">
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    </body>
    </form>
  );
};

