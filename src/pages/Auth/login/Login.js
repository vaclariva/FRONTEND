import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from "../../../assets/img/logo.png";

// import poto from '../img/bg.jpg'; // Jika poto diaktifkan, pastikan di-import
// import logoCF from '../img/CF.png'; // Jika logoCF diaktifkan, pastikan di-import

function LoginPage() {
  const containerStyle = {
    backgroundColor: '#E1EAF2',
    position: 'relative',
    width: '100%',
    height: '100vh',
  };

  return (
    <div style={containerStyle}>
      {/* <div style={navStyle}>
        <Link to="/home" style={navLinkStyle}>
          Home
        </Link>
        <Link to="/order" style={navLinkStyle}>
          Order
        </Link>
        <Link to="/blog" style={navLinkStyle}>
          Blog
        </Link>
      </div> */}
      <div className="login-page">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="cf-logo" />
        </div>
        <div className="frme1">
          <div className="row gx-5">
            <div className="col-md-6">
              {/* <img src={poto} className="loginpoto" /> */}
              {/* Uncomment the above line if 'poto' is defined */}
            </div>
          </div>
        </div>
        <div className="frame2">
          <div className="row gx-5">
            <div className="col-md-6">
              <div className="login-form-wrap">
                <div className="login-header">
                  <h3>WELCOME!!</h3>
                  <h4>Login To Your Account</h4>
                </div>
                {/* form */}
                <div className="login-form">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                      <input
                          type="text"
                          placeholder="Email"
                          id="emailInput"
                          // value={email}
                          // onChange={(e) => setEmail(e.target.value)}
                          // required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                      <input
                          type="password"
                          placeholder="Password"
                          // value={password}
                          // onChange={(e) => setPassword(e.target.value)}
                          // required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-end mb-20">
                    <div className="text">
                  <Link to="#">Forgot password?</Link>
                </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <Link to="/order" className="btn style1 w-100 d-block" fdprocessedid="rtahbg">
                          Login
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-12 text-center">
                      <p className="mb-0">
                        Don't have an Account? <Link className="link to" to="./reg">Create One</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
