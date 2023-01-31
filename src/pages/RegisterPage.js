import React from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <div>
      <h2>Register</h2>
      <RegisterForm />
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default RegisterPage;
