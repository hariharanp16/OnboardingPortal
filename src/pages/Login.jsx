import React, { useState } from "react";
import InputField from "../common/input/Input";

import "./Login.css";
function Login() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUpAnimate = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInAnimate = () => {
    setIsRightPanelActive(false);
  };

  const handleSignInClick = () => {
    console.log("signin clicked");
  };
  const handleSignUpClick = () => {
    console.log("signin clicked");
  };

  return (
    <div class="login-main">
      {/* <h1 class="d-block text-center text-uppercase mt-2">Onboarding Portal</h1> */}
      <div
        class={`login-container ${
          isRightPanelActive ? "right-panel-active" : ""
        }`}
        id="container"
      >
        <div class="login-form-container sign-up-container">
          <form action="#">
            <h2>For New Users</h2>

            <span>Please fill out required details for registration </span>
            <InputField
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              error={error}
            ></InputField>
            <InputField
              type="password"
              value={email}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              error={error}
            ></InputField>
            <button className="loginBtn mt-5" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </form>
        </div>
        <div class="login-form-container sign-in-container">
          <form action="#">
            <h2 className="text-uppercase">Sign in</h2>

            <InputField
              type="email"
              value={email}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="Email"
              error={error}
            ></InputField>
            <InputField
              type="password"
              value={email}
              onChange={(e) => setUserPassword(e.target.value)}
              placeholder="Password"
              error={error}
            ></InputField>
            <small>Forgot your password?</small>
            <button className="loginBtn mt-5" onClick={handleSignInClick}>
              Sign In
            </button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h2>Welcome Back!</h2>
              <button
                class="loginBtn ghost mt-4"
                onClick={handleSignInAnimate}
                id="signIn"
              >
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h2>Hello!</h2>
              <p>Enter your personal details and start journey with us</p>
              <button
                class="loginBtn ghost mt-4"
                onClick={handleSignUpAnimate}
                id="signUp"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
