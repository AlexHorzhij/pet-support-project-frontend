import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { getAuth } from 'redux/auth/authSelectors';
import { registerUser } from 'redux/auth/authOperations';

import { Loader } from 'components/Loader/Loader';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [firstPart, setFirstPart] = useState(true);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'userEmail':
        setEmail(value);
        break;
      case 'userPassword':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      case 'userName':
        setName(value);
        break;
      case 'userCity':
        setCity(value);
        break;
      case 'userPhone':
        setPhone(value);
        break;
      default:
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setName('');
        setCity('');
        setPhone('');
    }
  };

  const dispatch = useDispatch();
  const { isLoading } = useSelector(getAuth);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      registerUser({
        email: email,
        password: password,
        name: name,
        city: city,
        phone: phone,
      })
    );
  };

  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);
  const confirmPasswordId = useMemo(() => nanoid(), []);
  const nameId = useMemo(() => nanoid(), []);
  const cityId = useMemo(() => nanoid(), []);
  const phoneId = useMemo(() => nanoid(), []);

  return (
    <form onSubmit={handleSubmit}>
      {firstPart ? (
        <div>
          <input
            id={emailId}
            type="email"
            name="userEmail"
            value={email}
            onChange={handleChange}
            required
            placeholder="Email"
          />
          <input
            id={passwordId}
            type="password"
            name="userPassword"
            value={password}
            onChange={handleChange}
            required
            placeholder="Password"
          />
          <input
            id={confirmPasswordId}
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            required
            placeholder="Confirm Password"
          />
          <button type="button" onClick={() => setFirstPart(false)}>
            Next
          </button>
        </div>
      ) : (
        <div>
          <input
            id={nameId}
            type="text"
            name="userName"
            value={name}
            onChange={handleChange}
            required
            placeholder="Name"
          />
          <input
            id={cityId}
            type="text"
            name="userCity"
            value={city}
            onChange={handleChange}
            required
            placeholder="City, region"
          />
          <input
            id={phoneId}
            type="tel"
            name="userPhone"
            value={phone}
            onChange={handleChange}
            required
            placeholder="Mobile phone"
          />
          {!isLoading ? <button type="submit">Register</button> : <Loader />}
          <button type="button" onClick={() => setFirstPart(true)}>
            Back
          </button>
        </div>
      )}
    </form>
  );
};

export default RegisterForm;
