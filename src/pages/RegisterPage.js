import React from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <main>
      <h2>Register</h2>
      <RegisterForm />
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </main>
  );
}

export default RegisterPage;
