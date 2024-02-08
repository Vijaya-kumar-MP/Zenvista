// AdminLogin.jsx

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Body = styled.body`
  background: rgb(214, 214, 214);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const LoginBox = styled.div`
  width: 350px;
  height: 400px;
  background: rgb(214, 214, 214);
  margin: 150px auto;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #b6a9a9, -5px -5px 10px #ffffff;
`;

const Icon = styled.img`
  width: 110px;
  height: 110px;
  position: relative;
  top: -50px;
  left: 35%;
`;

const Heading2 = styled.h2`
  margin: -25px 0 20px 0;
  text-align: center;
  color: #8f8888;
`;

const Form = styled.form`
  margin-left: 40px;
`;

const Input = styled.input`
  display: block;
  width: 80%;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  outline: none;
  font-family: sans-serif;
  background: transparent;
  font-size: 16px;
  border-radius: 25px;
  text-shadow: 1px 1px 0 #fff;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;

  &:focus {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  }
`;

const Button = styled.button`
  width: 87%;
  border: none;
  height: 35px;
  border-radius: 25px;
  background: rgb(82, 182, 221);
  color: white;
  font-size: 20px;
  cursor: pointer;
  box-shadow: -5px -5px 20px rgb(224, 217, 217), 5px 5px 20px #babecc;
  outline: none;

  &:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  }
`;

const ForgotPasswordLink = styled.a`
  margin-left: 32%;
  color: #8f8888;
  font-size: 16px;
  text-decoration: none;
`;

const AdminLogin = () => {
    const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');

    // Example: Check login credentials (replace this with your actual authentication logic)
    if (username === 'admin' && password === 'password') {
      // Redirect to 'admindash' on successful login
      navigate('/admindash');
    } else {
      // Handle unsuccessful login (show error message, etc.)
    }
  };
  return (
    <Body>
      <LoginBox>
        <Icon src="../src/assets/images/adminlog.png" alt="Icon" />
        <Heading2>Member Login</Heading2>
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="username" placeholder="Username" />
          <Input type="password" name="password" placeholder="Password" />
          <Button type="submit">Sign In</Button>
        </Form>
        <br />
        <ForgotPasswordLink href="#">Forgot Password?</ForgotPasswordLink>
      </LoginBox>
    </Body>
  );
};

export default AdminLogin;
