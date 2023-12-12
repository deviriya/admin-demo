import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

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
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <span className="error-message">{errors.email.message}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>

      <p>
        Remember your password? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
