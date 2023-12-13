import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Col, Row } from 'reactstrap';
import MazenetLogoWhite from '../../assets/Mazenet-Logo-WHITE.png';
import Banner from '../../assets/banner.png';


interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const { register, formState: { errors }, handleSubmit } = useForm<ForgotPasswordFormData>();

  const onSubmit = (data: ForgotPasswordFormData) => {
    // Handle the submission logic here (e.g., send a password reset email)
    console.log(data);
  };

  return (
    <div className='bgmain'>
      <div className='bg-cover container'>
      </div>

      <div className='loginFrm'>
        <Row>
          <Col md={6} className='mr-5'>
            <div className='Lgnleft'>
              <div className='text-center'>
                <img src={MazenetLogoWhite} className='logo img-fluid mt-5' alt='Mazenet Logo' />
              </div>
              <div className='Lgnright'>
                <h3>Forgot Password</h3>
                <p>To reset your password, submit your username or your email address below.
                  If we can find you in the database, an email will be send to your email address,with
                  instructions how to get access again.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='my-4'>
                  <input
                    type='text'
                    className='form-control'
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
                  {errors.email && <span className='errMsg'>* {errors.email.message}</span>}
                </div>

                <div className='text-center'>
                  <button className='primaryBtn mb-3' type='submit'>Submit</button><br />
                  <Link to='/' className='forgot-text'>Back to Login?</Link>
                </div>
                <div className='cpyRyts mt-5'>
                  <p>Copyrights © 2023 Mazenet Solution Pvt Ltd. All Rights Reserved</p>
                </div>
              </form>
            </div>
          </Col>
          <Col md={6}>
            <img src={Banner} className='banner img-fluid mt-5' />
          </Col>
        </Row>
      </div>

    </div>
  );
};

export default ForgotPassword;
