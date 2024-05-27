import React, { useState } from "react";
import "./CSS/LoginSignup.css";

function LoginSignup() {
  const [state, setstate] = useState("Login");

  const [formData, setformData] = useState({
    usename: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login Function Executed", formData);
    let resData;
    await fetch("http://localhost:5700/login", {
      method: "POST",
      headers: {
        acccept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => (resData = data));
    if (resData.success) {
      localStorage.setItem("auth-token", resData.token);
      window.location.replace("/");
    } else {
      alert(resData.errors);
    }
  };

  const signup = async () => {
    console.log("SignUP Function Executed", formData);
    let resData;
    await fetch("http://localhost:5700/signup", {
      method: "POST",
      headers: {
        acccept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.jon())
      .then((data) => (resData = data));
    if (resData.success) {
      localStorage.setItem("auth-token", resData.token);
      window.location.replace("/");
    } else {
      alert(resData.errors);
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? (
            <input
              type="text"
              name="usename"
              value={formData.usename}
              onChange={changeHandler}
              placeholder="Your name"
            />
          ) : (
            <></>
          )}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Your email"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Your password"
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
        >
          Continue
        </button>

        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have an account ?{" "}
            <span
              onClick={() => {
                setstate("Login");
              }}
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account ?
            <span
              onClick={() => {
                setstate("Sign Up");
              }}
            >
              Click here
            </span>
          </p>
        )}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
