// eslint-disable-next-line no-unused-vars
import React from 'react';
import './css/loginsignup.css'
const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder={'your name'}/>
          <input type="email" placeholder={'email'}/>
          <input type="password" placeholder={'password'}/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account <span>Login</span>
        </p>
        <div className="loginsignup-adree">
          <input type="checkbox" name='' id =''/>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
