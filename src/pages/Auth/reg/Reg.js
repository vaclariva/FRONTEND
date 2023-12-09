import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Reg.css';
import logo from "../../../assets/img/icon.png";
import '@coreui/coreui/dist/css/coreui.min.css';

function SignupPage() {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const savedata = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/Api/registrasi', {
      username: username,
      email: email,
      password: password
    });
    window.location.href = '/login';
  }

  const containerStyle = {
    backgroundColor: '#E1EAF2',
    position: 'relative',
    width: '100%',
    height: '100vh',
  };

  return (
    <div style={containerStyle}>
      <div className="login-page">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="cf-logo" />
        </div>
        <div className="frame2">
          <div className="row gx-5">
            <div className="col-md-6">
              <div className="signup-form-wrap">
                <div className="signup-header">
                  <h3>DAFTAR</h3>
                </div>
                <div className="signup-form">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <button
                          type="button"
                          className="btn style1 w-100 d-block"
                          onClick={savedata}
                        >
                          SIGN UP
                        </button>
                      </div>
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

export default SignupPage;