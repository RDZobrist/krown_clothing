import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { emailSigninStart, googleSigninStart } from '../../redux/user/user.actions';
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
    const { emailSigninStart } = this.props;
    const { email, password } = this.state;

    emailSigninStart(email, password);


  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { googleSigninStart, emailSigninStart } = this.props;
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
}
const mapDispatchToProps = dispatch => ({
  googleSigninStart: () => dispatch(googleSigninStart()),
  emailSigninStart: (email, password) =>
    dispatch(emailSigninStart({ email, password }))
});
export default connect(null, mapDispatchToProps)(SignIn);
