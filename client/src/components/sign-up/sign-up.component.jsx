import React, {useState} from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signupStart } from '../../redux/user/user.actions';
import { SignupTitle, SignupContainer } from './sign-up.styles';

const SignUp = ({signupStart}) => {
  const [userCredentials, setUserCredentials ] = useState({displayName:'',email:'',password:'',confirmPassword:''})

  
  const { displayName, email, password, confirmPassword } = userCredentials;


  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
      signupStart({displayName, email, password});
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

 
    return (
      <SignupContainer>       
         <SignupTitle>I do not have a account</SignupTitle>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            label='Display Name'
            autocomplete="off"
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label='Email'
            autocomplete="off"
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            autocomplete="off"
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
            autocomplete="off"
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </SignupContainer>);
  
}
const mapDispatchToProps = dispatch => ({
  signupStart: userCredentials => dispatch(signupStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
