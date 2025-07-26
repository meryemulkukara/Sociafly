import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
} from 'mdb-react-ui-kit';

export default function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { status, error, user } = useSelector((state) => state.auth);

    const [form, setForm] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resultAction = await dispatch(login(form));
        if (login.fulfilled.match(resultAction)) {
            navigate('/');
        }
    };

    return (
        <MDBContainer fluid style={{ height: '100vh' }}>
            <MDBRow className="h-100">
                <MDBCol sm='6' className='d-flex flex-column align-items-center justify-content-center'>
                        <img
                            src="/img.png"
                            alt="Logo"
                            style={{ width: '14vw', maxWidth: '180x',minWidth:'100px', height: 'auto', marginBottom: '20px', objectFit: 'contain' }}
                        />

                        <h3 className="fw-normal mb-2" style={{letterSpacing: '1px', fontSize: '18px', textAlign: 'left', marginLeft: 0}}>Log in</h3>
                        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '500px', padding: '0 2rem' }} >
                            <MDBInput
                                wrapperClass='mb-4'
                                label='Email address'
                                id='formControlLgEmail'
                                type='email'
                                size="lg"
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                            <MDBInput
                                wrapperClass='mb-4 '
                                label='Password'
                                id='formControlLgPassword'
                                type='password'
                                name='password'
                                value={form.password}
                                onChange={handleChange}
                                required
                            />
                            <MDBBtn
                                className="mb-4 w-100"
                                style={{ backgroundColor: 'rgb(246, 200, 160)', border: 'none'}}
                                type="submit"
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? 'Logging in...' : 'Login'}
                            </MDBBtn>
                            {error && <div style={{ color: 'red', marginTop: 10, marginLeft: 40 }}>{error.toString()}</div>}
                        </form>
                        <p className="small mb-1"><a className="text-muted" href="#!">Forgot password?</a></p>
                        <p className='ms-5'>Don't have an account? <a href="#!" className="link-info">Register here</a></p>
                </MDBCol>
                <MDBCol sm='6' className='d-none d-sm-block p-0'>
                    <img src="/sociaflyLogin.png"
                         alt="Login image"
                         className="w-100 h-100"
                         style={{objectFit: 'cover'}} />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}