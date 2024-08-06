import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import loginImage from './Login.jpg'; 
import logo from './logo.png'; 

function App() {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className="col-md-6 d-none d-md-block p-0">
          <img src={loginImage} alt="Hospital" className="img-fluid vh-100" />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="login-form">
            <div className="text-center mb-4">
              <img src={logo} alt="Logo" className="logo mb-4" />
              <h2>Sign In</h2>
            </div>
            <form>
              <div className="form-group position-relative mb-3">
                <input type="email" className="form-control email-input" placeholder="Email/Mobile Number" />
                <span className="placeholder-text">Ex:@gmail.com</span>

              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" />
                <small className="form-text text-right">
                  <a href="#">Forgot?</a>
                </small>
              </div>
              <button type="submit" className="btn btn-primary btn-block mt-3">Sign In</button>
              <button type="button" className="btn btn-outline-secondary btn-block mt-3">
                <i className="bi bi-fingerprint"></i> Sign In with fingerprint
              </button>
            </form>
            <div className="text-center mt-4">
              <p>Don't have an account? <a href="#">Sign up</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
