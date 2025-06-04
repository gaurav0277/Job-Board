import React from 'react';
import { Link } from 'react-router-dom';

import FormRow from '../components/FormRow.jsx';
import Logo from '../components/Logo.jsx';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'; 
const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Register</h4>
        <FormRow type='text' name='name' />
        <FormRow type='text' name='lastName' labelText='Last Name' />
        <FormRow type='text' name='location' />
        <FormRow type='email' name='email' />
        <FormRow type='password' name='password' />
        <button type='submit' className='btn btn-block'>Submit</button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>Login</Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
