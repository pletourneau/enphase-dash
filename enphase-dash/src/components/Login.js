// components/Login.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Assuming you obtain the access token from the authentication process
    const accessToken = "your-obtained-access-token";

    // Store access token in localStorage
    localStorage.setItem("enphaseAccessToken", accessToken);

    // Redirect to Enphase authorization URL
    const enphaseAuthorizationUrl = `https://api.enphaseenergy.com/oauth/authorize?response_type=code&client_id=192ef4c2b2f65ae0e67eb93eb402e430`;

    // Redirect the user to the Enphase authorization URL
    window.location.href = enphaseAuthorizationUrl;
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login with Enphase</button>
    </div>
  );
};

export default Login;
