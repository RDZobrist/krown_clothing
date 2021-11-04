import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithFacebook, signInWithGoogle } from '../../firebase/firebase.utils';

import { SigninContainer, SigninandSignupButtonContainer } from './sign-in.styles';
import { SignupTitle } from '../sign-up/sign-up.styles'

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <SigninContainer>      <SignupTitle>I already have an account</SignupTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <SigninandSignupButtonContainer>            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Google
            </CustomButton>
            <CustomButton onClick={signInWithFacebook} isFacebookSignIn>
              Facebook
            </CustomButton>
          </SigninandSignupButtonContainer>        </form>
      </SigninContainer>
    );
  }
}

export default SignIn;
