import React from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <main>
      <h2>Login</h2>
      <LoginForm />
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </main>
  );
}

export default LoginPage;
