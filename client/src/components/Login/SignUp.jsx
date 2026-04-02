import React, { useEffect, useState } from 'react';
import { FaCheck, FaEnvelope, FaLock, FaTimes, FaUser } from 'react-icons/fa';
import Spinner from 'react-bootstrap/Spinner';
import swal from 'sweetalert';
import { useDoctorSignUpMutation, usePatientSignUpMutation } from '../../redux/api/authApi';
import { message } from 'antd';

const SignUp = ({ setSignUp }) => {
    const [error, setError] = useState({});
    const [infoError, setInfoError] = useState('');
    const [loading, setLoading] = useState(false);
    const formField = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    };
    const [user, setUser] = useState(formField);
    const [userType, setUserType] = useState('patient');
    
    // We omit error and data params to keep compiler silent if unused, but we need them:
    const [doctorSignUp, { isSuccess: dIsSuccess, isError: dIsError, error: dError, isLoading: dIsLoading }] = useDoctorSignUpMutation();
    const [patientSignUp, { isSuccess: pIsSuccess, isError: pIsError, error: pError, isLoading: pIsLoading }] = usePatientSignUpMutation();
    
    const [passwordValidation, setPasswordValidation] = useState({
        carLength: false,
        specailChar: false,
        upperLowerCase: false,
        numeric: false
    });
    const [emailError, setEmailError] = useState({
        emailError: false
    });

    const handleSignUpSuccess = () => {
        setLoading(false);
        setUser(formField);
    };

    const handleEmailError = (name, value) => {
        if (name === 'email') {
            setEmailError({
                emailError: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            });
        }
    };

    const hanldeValidation = (name, value) => {
        if (name === 'password') {
            setPasswordValidation({
                carLength: (value.length > 8),
                specailChar: /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(value),
                upperLowerCase: /^(?=.*[a-z])(?=.*[A-Z])/.test(value),
                numeric: /^(?=.*\d)/.test(value),
            });
        }
    };

    const hanldeOnChange = (e) => {
        let { name, value } = e.target;
        hanldeValidation(name, value);
        handleEmailError(name, value);
        let isPassValid = true;

        if (name === 'email') {
            isPassValid = /\S+@\S+\.\S+/.test(value);
        }
        if (name === 'password') {
            isPassValid = ((value.length > 8)
                && /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(value)
                && /^(?=.*[a-z])(?=.*[A-Z])/.test(value)
                && /^(?=.*\d)/.test(value));
        }
        if (isPassValid || !isPassValid) {
            const newPass = { ...user };
            newPass[name] = value;
            setUser(newPass);
        }
    };

    const handleUserTypeChange = (e) => {
        setUserType(e.target.value);
    };

    const hanldeOnSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (userType === "doctor") {
                await doctorSignUp(user).unwrap();
                swal({
                    icon: 'success',
                    text: `Successfully Account Created Please Verify Your email`,
                    timer: 5000
                });
                handleSignUpSuccess();
            } else {
                await patientSignUp(user).unwrap();
                swal({
                    icon: 'success',
                    text: `Successfully ${userType === 'doctor' ? 'Doctor' : 'Patient'} Account Created Please Login`,
                    timer: 2000
                });
                handleSignUpSuccess();
                setSignUp(false);
            }
        } catch (error) {
            const errorMessage = error?.data?.message || "Registration failed. Please try again.";
            message.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-form-container">
            <h2 className="auth-title">Create Account</h2>
            <p className="auth-subtitle mb-4">Join MediBook and book doctors instantly.</p>
            
            <form className="auth-form" onSubmit={hanldeOnSubmit}>
                <div className="auth-input-group mb-3">
                    <span className="auth-input-icon"><FaUser /></span>
                    <input placeholder="First Name" name="firstName" type="text" className="auth-input" onChange={hanldeOnChange} value={user.firstName} required />
                </div>
                
                <div className="auth-input-group mb-3">
                    <span className="auth-input-icon"><FaUser /></span>
                    <input placeholder="Last Name" name="lastName" type="text" className="auth-input" onChange={hanldeOnChange} value={user.lastName} required />
                </div>
                
                <div className="auth-input-group mb-3">
                    <span className="auth-input-icon"><FaEnvelope /></span>
                    <input placeholder="Email" name="email" type="email" className="auth-input" onChange={hanldeOnChange} value={user.email} required />
                </div>
                
                <div className="auth-input-group mb-3">
                    <span className="auth-input-icon"><FaLock /></span>
                    <input type="password" name="password" placeholder="Password" className="auth-input" onChange={hanldeOnChange} value={user.password} required />
                </div>
                
                <div className="auth-input-group mb-3 d-flex align-items-center">
                    <span className="auth-input-icon">Role</span>
                    <select
                        className="auth-input border-0"
                        style={{ outline: "none" }}
                        onChange={handleUserTypeChange}
                        defaultValue='patient'
                    >
                        <option value="patient">Patient</option>
                        <option value="doctor">Doctor</option>
                    </select>
                </div>

                {Object.keys(error).length > 0 && <h6 className="text-danger small">{JSON.stringify(error)}</h6>}
                {infoError && <h6 className="text-danger small">{infoError}</h6>}
                
                <div className="password-validatity p-2 mb-3 bg-light rounded small">
                    <div className={emailError.emailError ? "text-success" : "text-danger"}>
                        {emailError.emailError ? <FaCheck /> : <FaTimes />} <span className="ms-1">Valid Email</span>
                    </div>
                    <div className={passwordValidation.carLength ? "text-success" : "text-danger"}>
                        {passwordValidation.carLength ? <FaCheck /> : <FaTimes />} <span className="ms-1">At least 8 chars</span>
                    </div>
                    <div className={passwordValidation.specailChar ? "text-success" : "text-danger"}>
                        {passwordValidation.specailChar ? <FaCheck /> : <FaTimes />} <span className="ms-1">Special char</span>
                    </div>
                    <div className={passwordValidation.upperLowerCase ? "text-success" : "text-danger"}>
                        {passwordValidation.upperLowerCase ? <FaCheck /> : <FaTimes />} <span className="ms-1">Upper & Lower case</span>
                    </div>
                    <div className={passwordValidation.numeric ? "text-success" : "text-danger"}>
                        {passwordValidation.numeric ? <FaCheck /> : <FaTimes />} <span className="ms-1">Number</span>
                    </div>
                </div>

                <button type="submit" 
                    className="auth-btn-primary w-100 mb-3"
                    disabled={
                        !(passwordValidation.carLength && passwordValidation.numeric && passwordValidation.upperLowerCase && passwordValidation.specailChar && emailError.emailError) || loading
                    }
                >
                    {loading || pIsLoading || dIsLoading ? <Spinner size="sm" animation="border" /> : "Sign Up"}
                </button>
            </form>
        </div>
    );
};

export default SignUp;