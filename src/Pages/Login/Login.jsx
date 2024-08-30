import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div>
            <div className="wrapper">
      <div className="login-box">
        <form action="">
          <h2>Login</h2>

          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>

          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>

          <button type="submit"><b>Login</b></button>

          <div className="register-link">
            <p>Don't have an account? <a><Link to ='/signup'>Sign Up</Link></a></p>
          </div>
        </form>
      </div>
    </div>
        </div>
    );
};

export default Login;