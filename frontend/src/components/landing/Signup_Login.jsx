import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { NavLink, redirect } from "react-router-dom";

const Signup_Login = () => {
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  // Function to check if both email and password are filled
  const isSubmitDisabled = () => {
    return (
      !emailValue ||
      !password ||
      !isValidEmail ||
      emailError ||
      passwordError ||
      buttonClicked
    );
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    const isValid = validateEmail(email);
    setEmailValue(email);
    setIsValidEmail(isValid);
    setButtonClicked(false);
    setEmailError(false);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordError(false);
  };

  const handleButtonClick = async (e) => {
    e.preventDefault();

    if (!emailValue) {
      setEmailError(true);
      return;
    }

    if (!password) {
      setPasswordError(true);
      return;
    }

    if (isValidEmail) {
      await axios
        .post(
          `http://127.0.0.1:3000/user/login`,
          {
            email: emailValue,
            password: password,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.entityRole === "STUDENT") {
            navigate("/user-page");
          }
          if (res.data.entityRole === "ADMIN") {
            navigate("/placement-cell");
          }
          console.log(res.data);
        });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  return (
    <div className="z-0 bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
          Login
        </h2>

        <form className="mx-auto max-w-lg rounded-lg border">
          <div className="flex flex-col gap-4 p-4 md:p-8">
            <div>
              <label
                htmlFor="email"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Email
              </label>
              <input
                name="email"
                placeholder="Enter Your Email"
                className={`w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring ${
                  isValidEmail ? "" : "ring-red-500"
                }`}
                value={emailValue}
                onChange={handleEmailChange}
              />
              {emailError && (
                <p className="mt-1 text-sm text-red-500">
                  Please enter an email address.
                </p>
              )}
              {!isValidEmail && !buttonClicked && !emailError && (
                <p className="mt-1 text-sm text-red-500">
                  Please enter a valid email address.
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Password
              </label>
              <div
                className={`relative ${
                  passwordError || (password === "" && buttonClicked)
                    ? "border-red-500"
                    : ""
                }`}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter Your Password"
                  className={`w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring ${
                    passwordError ? "ring-red-500" : ""
                  }`}
                  value={password}
                  onChange={handlePasswordChange}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M10 0a10 10 0 100 20 10 10 0 000-20zM1 10a9 9 0 1118 0 9 9 0 01-18 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2.5a.5.5 0 01.5.5V4h2a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h2V3a.5.5 0 01.5-.5zm1 2.49l-1 .01a1 1 0 00-1 1v10a1 1 0 001-1l1-.01a1 1 0 001-1v-10a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {(passwordError || (password === "" && buttonClicked)) && (
                <p className="mt-1 text-sm text-red-500">
                  {" "}
                  Please enter your password.
                </p>
              )}
            </div>

            <input
              type="submit"
              value="Login"
              className={`block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active-bg-gray-600 md:text-base ${
                isSubmitDisabled() ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitDisabled()}
              onClick={handleButtonClick} // Handle the button click event
            />
            <p className="text-center text-sm text-gray-500">
              <NavLink to="/forgotPassword">Forgot your password?</NavLink>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup_Login;
