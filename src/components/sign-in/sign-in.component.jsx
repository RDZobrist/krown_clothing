import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle, auth, signInWithFacebook } from "../../firebase/firebase.utils";
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })

        } catch (error) {
            console.error(error)
        }

    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>
                    I already have an account
                </h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <FormInput
                        name='email'
                        type='email'
                        label='Email'
                        handleChange={this.handleChange.bind(this)}
                        value={this.state.email}
                        required

                    />

                    <FormInput
                        name='password'
                        type='password'
                        handleChange={this.handleChange.bind(this)}
                        label='Password'
                        value={this.state.password}
                        required
                    />

                    <div className='buttons'>

                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google</CustomButton>

                        {/* <CustomButton type='button' onClick={signInWithFacebook} isFacebookSignIn> Sign in with Facebook </CustomButton> */}
                        <CustomButton type='submit'> Sign In </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn