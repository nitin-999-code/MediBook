import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'react-bootstrap';
import { useResetPasswordMutation, useUserLoginMutation } from '../../redux/api/authApi';
import { message } from 'antd';
import { useMessageEffect } from '../../utils/messageSideEffect';
import { decodeToken } from '../../utils/jwt';

const SignIn = () => {
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [infoError, setInfoError] = useState('');
    const [show, setShow] = useState(true);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [userLogin, { isLoading }] = useUserLoginMutation();
    const [forgotEmail, setForgotEmail] = useState('');
    const [resetPassword, { isError: resetIsError, isSuccess: resetIsSuccess, error: resetError, isLoading: resetIsLoading }] = useResetPasswordMutation();

    useEffect(() => {
        const t = setTimeout(() => setShow(false), 12000);
        return () => clearTimeout(t);
    }, []);

    const onSubmit = async (formData) => {
        setInfoError('');
        try {
            const result = await userLogin({ ...formData }).unwrap();
            message.success('Successfully Logged in');
            const payload = decodeToken(result.accessToken);
            if (payload.role === 'admin') {
                navigate('/admin/dashboard', { replace: true });
            } else {
                navigate('/dashboard', { replace: true });
            }
        } catch (err) {
            const msg = err?.data?.message || 'Login failed';
            message.error(msg);
            setInfoError(typeof msg === 'string' ? msg : '');
        }
    };

    const onHandleForgotPassword = async (e) => {
        e.preventDefault();
        resetPassword({ email: forgotEmail });
        setForgotEmail('');
        setShowForgotPassword(false);
    };

    useMessageEffect(resetIsLoading, resetIsSuccess, resetIsError, resetError, 'Successfully Reset Password, Please check your Email!!');

    const handleShowForgotPassword = () => {
        setShowForgotPassword(!showForgotPassword);
    };

    return (
        <div className="auth-form-container">
            {showForgotPassword ? (
                <form className="auth-form" onSubmit={onHandleForgotPassword}>
                    <h2 className="auth-title">Reset Password</h2>
                    <p className="auth-subtitle mb-4">Enter your email to reset your password.</p>
                    <div className="auth-input-group mb-3">
                        <span className="auth-input-icon"><FaEnvelope /></span>
                        <input
                            value={forgotEmail}
                            onChange={(e) => setForgotEmail(e.target.value)}
                            placeholder="Email address"
                            type="email"
                            className="auth-input"
                            required
                        />
                    </div>
                    <div className="text-end mb-4">
                        <button type="button" onClick={handleShowForgotPassword} className="auth-text-link">Remember Password?</button>
                    </div>
                    <button className="auth-btn-primary w-100" type="submit">
                        {resetIsLoading ? <Spinner size="sm" animation="border" /> : 'Send Reset Link'}
                    </button>
                </form>
            ) : (
                <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                    <Toast show={show} onClose={() => setShow(!show)} className="auth-toast position-absolute top-0 end-0 m-3" style={{ zIndex: 1050 }}>
                        <Toast.Header>
                            <strong className="me-auto">Fair use & demo access</strong>
                        </Toast.Header>
                        <Toast.Body className="small">
                            <p className="mb-2"><strong>Patient:</strong> testuser@gmail.com / 123456</p>
                            <p className="mb-0"><strong>Doctor:</strong> doctor@gmail.com / 123456</p>
                        </Toast.Body>
                    </Toast>
                    <h2 className="auth-title">Welcome back</h2>
                    <p className="auth-subtitle mb-4">Sign in to your account to continue</p>
                    
                    <div className="auth-input-group mb-3">
                        <span className="auth-input-icon"><FaEnvelope /></span>
                        <input 
                            {...register('email', { required: true })} 
                            placeholder="Email address" 
                            type="email" 
                            className="auth-input" 
                        />
                    </div>
                    {errors.email && <span className="text-danger small mb-2 d-block">This field is required</span>}
                    
                    <div className="auth-input-group mb-3">
                        <span className="auth-input-icon"><FaLock /></span>
                        <input 
                            {...register('password', { required: true })} 
                            type="password" 
                            placeholder="Password" 
                            className="auth-input" 
                        />
                    </div>
                    {errors.password && <span className="text-danger small mb-2 d-block">This field is required</span>}
                    {infoError && <p className="text-danger small mb-2">{infoError}</p>}
                    
                    <div className="text-end mb-4">
                        <button type="button" onClick={handleShowForgotPassword} className="auth-text-link">Forgot Password?</button>
                    </div>
                    <button className="auth-btn-primary w-100" type="submit">
                        {isLoading ? <Spinner size="sm" animation="border" /> : 'Sign In'}
                    </button>
                </form>
            )}
        </div>
    );
};

export default SignIn;
