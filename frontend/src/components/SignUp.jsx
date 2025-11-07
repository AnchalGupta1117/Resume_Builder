import React, { useState, useContext } from 'react';
import { authStyles as styles } from '../assets/dummystyle';
import { Inputs } from './Inputs';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { validateEmail } from '../utils/helper';
import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';

const SignUp = ({setCurrentPage }) => {
const [fullName, setFullName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState(null);
const { updateUser } = useContext(UserContext);
const navigate = useNavigate();


const handleSignUp = async (e) => {
    e.preventDefault();
    if (!fullName ){
        setError('Full name is required');
        return;
    }
    if (!validateEmail(email)) {
        setError('Invalid email format');
        return;
    }
    if(!password){
        setError('Password is required');
        return;
    }
    if (password.length < 6) {
        setError('Password must be at least 6 characters long');
        return;
    }   
    setError(null);

    try {
        const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER,{
            name: fullName,
            email,
            password,
        });
        const { token } = response.data;
        if (token) {
            localStorage.setItem('token', token);
            updateUser(response.data);
            navigate('/dashboard');
        }
    } catch (err) {
        setError(err.response?.data?.message || 'Registration failed. Please try again.');
    }
};

  return (
    // <div className={styles.signupContainer}>
    <div className={styles.container}>
    <div className="w-[90vw] md:w-[400px] bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-violet-100 shadow-2xl">
     
        <div className={styles.headerWrapper}>
            <h3 className={styles.signupTitleTitle}>Create Account</h3>
            <p className={styles.signupSubtitle}>Join thousands of professionals today</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSignUp} className={styles.signupForm}>
        <Inputs
          onChange={({target}) => setFullName(target.value)}
          label="Full Name"
          placeholder="John Doe"
          type="text"
          value={fullName}
        />

        <Inputs
          onChange={({target}) => setEmail(target.value)}
          label="Email"
          placeholder="email@example.com"
          type="email"
          value={email}
        />
        <Inputs
          onChange={({target}) => setPassword(target.value)}
          label="Password"
          placeholder="Min 8 characters"
          type="password"
          value={password}
        />

        {error && <div className={styles.errorMessage}>{error}</div>}

        <button type="submit" className={styles.signupButton}>
          Create Account
        </button>

        {/* FOOTER */}
        <p className={styles.switchText}>
            Already have an account?{' '}
            <button
                type="button"
                className={styles.signupSwitchButton}
                onClick={() => setCurrentPage('login')}
            >
                Sign In
            </button>
        </p>
      </form>
</div>
    </div>
  )
}

export default SignUp