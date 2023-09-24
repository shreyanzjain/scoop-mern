import React, { useState } from 'react';

const ForgotPassword = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [emailError, setEmailError] = useState(false); // New state for email error

  const handleEmailChange = (e) => {
    const email = e.target.value;
    const isValid = validateEmail(email);
    setEmailValue(email);
    setIsValidEmail(isValid);
    // Reset buttonClicked and emailError when email changes
    setButtonClicked(false);
    setEmailError(false);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    if (!emailValue) {
      // If email is empty, show error and return
      setEmailError(true);
      return;
    }

    if (isValidEmail) {
      setShowMessage(true);
      setButtonClicked(true);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Get Your Password</h2>

        <form className="mx-auto max-w-lg rounded-lg border">
          <div className="flex flex-col gap-4 p-4 md:p-8">
            <div>
              <label htmlFor="email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email</label>
              <input
                name="email"
                placeholder="Enter Your Email"
                className={`w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring ${isValidEmail ? '' : 'ring-red-500'}`}
                value={emailValue}
                onChange={handleEmailChange}
              />
              {emailError && (
                <p className="mt-1 text-sm text-red-500">Please enter an email address.</p>
              )}
              {!isValidEmail && !buttonClicked && !emailError && (
                <p className="mt-1 text-sm text-red-500">Please enter a valid email address.</p>
              )}
            </div>
            {showMessage && buttonClicked && isValidEmail && (
              <div
                className="mt-2 p-2 rounded-lg text-white text-center bg-green-500"
              >
                Check your email for password.
                <p className="text-white text-base mt-2">Email: {emailValue}</p>
              </div>
            )}
            <button
              onClick={handleButtonClick}
              className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active-bg-gray-600 md:text-base"
            >
              Get Your Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
