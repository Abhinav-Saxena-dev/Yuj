import React, { useState } from "react";

import FormInput from "../Form-Input/form-input.component";

import CustomButton from "../Custom-button/custom-button.component";

import { ReactComponent as Logo} from './../../assets/undraw_programmer_re_owql.svg';

import { Link } from 'react-router-dom';

import "./sign-up.style.scss";

const SignUp = () => {
  const [state, setState] = useState({
    id : 0,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = async (event) =>{
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state)
  };
  await fetch('http://localhost:8080/addUser', requestOptions)
  .then(response => console.log(response));

  setState(prevState => ({
    id : prevState.id + 1,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  })
  )
}

  return (
    <div className="sign-up-overview">
      <div className="sign-up-box">
        <div className="logo-container">
            <Logo className="logo"/>
        </div>
        <div className="form-container">
          <div className="logo-svg"> Logo</div>
          <div className="title-container">
            <span className="title">Sign up</span>
          </div>
          <form className="form" onSubmit = {handleSubmit}>
            <FormInput
              name="first_name"
              type="text"
              handleChange={handleChange}
              value={state.first_name}
              label="First Name"
              required
            />
            <FormInput
              name="last_name"
              type="text"
              handleChange={handleChange}
              value={state.last_name}
              label="Second Name"
              required
            />
            <FormInput
              name="email"
              type="email"
              handleChange={handleChange}
              value={state.email}
              label="Email"
              required
            />
            <FormInput
              name="password"
              type="password"
              handleChange={handleChange}
              value={state.password}
              label="Password"
              required
            />
            <CustomButton type="submit">Sign Up</CustomButton>
          </form>
          <div className="sign-up-link">
            <span className="link-box">Already a member? <Link to='/signin' className="link">Sign in</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
