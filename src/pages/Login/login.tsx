import React from 'react';
import { Col, Row } from 'reactstrap';
import { useForm } from 'react-hook-form';
import MazenetLogoWhite from '../../assets/Mazenet-Logo-WHITE.png';
import Banner from '../../assets/banner.png';
import { Link } from 'react-router-dom';
// import Aos from 'aos';

interface FormData {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm<FormData>();

    // useEffect(() => {
    //     Aos.init({ duration: 500, once: true })
    // }, [])

    const onSubmit = (data: FormData) => {
        console.log(data);
        reset();
    };

    return (
        <div className='bgmain'>
            <div className='loginFrm animated_div'>
                <Row>
                    <Col md={6}>
                        <div className='Lgnleft'>
                            <div className="zoom-out">
                                <img src={MazenetLogoWhite} className='w-50 img-fluid' alt='Mazenet Logo' />
                            </div>
                            <div className='Lgnright'>
                                <h3>Get future fit with the <br /> most in-demand skills!</h3>
                                <p className='font-14'>Experience immersive learning with PRISM</p>
                            </div>

                            <div className='login-name'>
                                <h4 className='mb-3'>Login to your account</h4>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='my-4'>
                                    <input
                                        type='text'
                                        className='form-control mt-5'
                                        placeholder='Your email address'
                                        autoFocus
                                        {...register("email", {
                                            required: "Email is required.",
                                            pattern: {
                                                value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                                message: "Invalid email address."
                                            }
                                        })}
                                    />
                                    {errors.email && <span className='text-danger font-14'>* {errors.email.message}</span>}
                                </div>
                                <div className='my-4'>
                                    <input
                                        type='password'
                                        className='form-control'
                                        placeholder='******'
                                        {...register("password", {
                                            required: "Password is required.",
                                            pattern: {
                                                value: /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/,
                                                message: "Password should be strong."
                                            }
                                        })}
                                    />
                                    {errors.password && <span className='text-danger font-14'>* {errors.password.message}</span>}
                                </div>
                                <div className='my-4 d-flex align-items-center'>
                                    <input type="checkbox" id="remember" name="remember" value="Bike" className='mx-1' />
                                    <label htmlFor="remember" className='check font-14'> Remember username</label>
                                </div>

                                <div className='text-center'>
                                    <button className='primaryBtn mb-3' type='submit'>Login</button><br />
                                    <Link to='/forgot-password' className='forgot-text font-14'>Forgot Password?</Link>
                                </div>
                                <div className='cpyRyts mt-5'>
                                    <p className='font-14'>Copyrights © 2023 Mazenet Solution Pvt Ltd. All Rights Reserved</p>
                                </div>
                            </form>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='d-none d-md-block'>
                            <img src={Banner} className='img-fluid mt-5' />
                        </div>
                    </Col>
                </Row>
            </div>

        </div>
    );
};

export default Login;
