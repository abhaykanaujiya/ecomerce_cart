import React from "react";

import "./login.css";
export default function Register() {
  console.log("login clicked");
  const handleClick = () => {};
  return (
    <div
      className='body_container'
      style={{ backgroundColor: "black", height: "755px" }}
    >
      <form>
        <h3>Login Here</h3>

        <label>Username</label>
        <input type='text' placeholder='User name ' id='username' />
        <label>Email</label>
        <input type='email' placeholder='Email' id='email' />
        <label>Phone no</label>
        <input type='text' placeholder='phone no' id='phone_no' />
        <label>Password</label>
        <input type='password' placeholder='Password' id='password' />

        <button className='button_' onClick={handleClick()}>
          Log In
        </button>
        <div className='social'>
          <div className='go'>
            <i className='fab fa-google'></i> Google
          </div>
          <div className='fb'>
            <i className='fab fa-facebook'></i> Facebook
          </div>
        </div>
      </form>
    </div>
  );
}
