import React from 'react';
import { getPerformance } from "firebase/performance";

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInandSignUpContainer } from './sign-in-and-sign-up.styles';
const SignInAndSignUpPage = () => (
  <SignInandSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInandSignUpContainer>
);
getPerformance();
export default SignInAndSignUpPage;
