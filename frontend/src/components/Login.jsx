import React,{useContext,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { validateEmail } from '../utils/helper';
import { authStyles as styles } from '../assets/dummystyle';
import { Inputs } from './Inputs';
import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';

const Login = ({setCurrentPage}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const { updateUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError('Invalid email format');
            return;
        }
        if(!password){
            setError('Password is required');
            return;
        }

        setError(null);
        try {
            const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN,{email,password,});
            const { token } = response.data;
            if (token) {
                localStorage.setItem('token', token);
                updateUser(response.data);
                navigate('/dashboard');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed. Please try again.');
        }
    };



  return (
<div className={styles.container}>
<div className="w-[90vw] md:w-[400px] bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-violet-100 shadow-2xl">
        <div className={styles.headerWrapper}>
            <h3 className={styles.title}>Welcome Back</h3>
            <p className={styles.subtitle}>Log in to continue building amazing resumes</p>

        </div>

    {/* Form Section */}
    <form className={styles.form} onSubmit={handleLogin}>
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
        <button type="submit" className={styles.submitButton}>Log In</button>

        <p className={styles.switchText}>
            Don't have an account?{' '}
            <button
                type="button"
                onClick={() => setCurrentPage('signup')}
                className={styles.switchButton}
            >
                Sign Up
            </button>
        </p>
    </form>
    </div>
    </div>
        
  )
}

export default Login