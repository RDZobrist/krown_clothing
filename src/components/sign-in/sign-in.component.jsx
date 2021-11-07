import React, {useState} from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { emailSigninStart, googleSigninStart } from '../../redux/user/user.actions';
import { SigninContainer, SigninandSignupButtonContainer } from './sign-in.styles';

import { SignupTitle } from '../sign-up/sign-up.styles'

const SignIn = ({ emailSigninStart, googleSigninStart }) => {
  const [userCredentials, setCredentials] = useState({ email: '', password: ''});
  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    emailSigninStart(email, password);


  };

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

    return (
      <SigninContainer>      
        <SignupTitle>I already have an account</SignupTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit} autoComplete="off">
        <input type='hidden' value='prayer' />
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={userCredentials.email}
            label='email'
            autoComplete="off"
            required
          />
          <FormInput
            name='password'
            type='password'
            value={userCredentials.password}
            handleChange={handleChange}
            label='password'
            autoComplete="off"
            required
          />
          <SigninandSignupButtonContainer>
          <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton
              type='button'
              onClick={googleSigninStart}
              isGoogleSignIn
            >
              Google
            </CustomButton>
            {/* <CustomButton onClick={signInWithFacebook} isFacebookSignIn>
              Facebook
            </CustomButton> */}
          </SigninandSignupButtonContainer>        </form>
      </SigninContainer>
    );
  
}
const mapDispatchToProps = dispatch => ({
  googleSigninStart: () => dispatch(googleSigninStart()),
  emailSigninStart: (email, password) =>
    dispatch(emailSigninStart({ email, password }))
});
export default connect(null, mapDispatchToProps)(SignIn);
