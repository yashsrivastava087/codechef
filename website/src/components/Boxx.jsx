import React, { useState } from 'react';
import './Boxx.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import codechef from './codeChefLogo.png';
import image1 from './image1.png';

const Boxx = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Please fill in both email and password fields.');
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);

    // Reset error state
    setError('');
  };

  const handleInputChange = (e) => {
    // Reset error state on input change
    setError('');
    if (e.target.id === 'email') {
      setEmail(e.target.value);
    } else if (e.target.id === 'password') {
      setPassword(e.target.value);
    }
  };

  return (
    <div className='container'>
      <div className='background-image-1'></div>
      <div className='background-image-2'></div>
      <div className='background-image-3'></div>

      <div className='box'>
        <img src={codechef} alt="" style={{ width: '130px' }} />
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className='innerboxs'>
            <div className='details'>Email Id</div>
            <div className={`input-container ${error && !email ? 'error' : ''}`}>
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input
                type="email"
                placeholder="Email"
                id="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className='details'>Password</div>
            <div className={`input-container ${error && !password ? 'error' : ''}`}>
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                id="password"
                value={password}
                onChange={handleInputChange}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="icon eye-icon"
                onClick={togglePasswordVisibility}
              />
            </div>
            <div className='remember-me'>
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Login</button>
            <a href="#" className='forgot-pw'>Forgot password?</a>
          </div>
        </form>
        <div className='signup'>
          <p>Don't have an account? <a href="#">Sign up</a></p>
        </div>
      </div>
    </div>
  );
}

export default Boxx;

