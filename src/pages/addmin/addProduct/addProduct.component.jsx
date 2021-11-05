import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import FormInput from '../../../components/form-input/form-input.component';
import './admin.dashboard.component.styles'

import {selectCurrentUser} from '../../../redux/user/user.selector'
class AdminDashboard extends React.Component{
    state = {
        adminLogin: null,
        adminPassword: null
    }
    handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
        console.log(this.state)
      };

    handleSubmit = async event => {
        event.preventDefault();
    
        const { adminLogin, adminPassword } = this.state;
    
        // try {
        //   await auth.signInWithEmailAndPassword(email, password);
        //   this.setState({ email: '', password: '' });
        // } catch (error) {
        //   console.log(error);
        // }
      };
    
    
     render(){
         return(
          <div className='admin'>
            <FormInput
            name='adminLogin'
            type='email'
            value={this.state.adminLogin}
            handleChange={this.handleChange}
            required
          />            <label>login</label>
         
            <FormInput
            name='adminPassword'
            type='password'
            value={this.state.adminPassword}
            handleChange={this.handleChange}
            required
          />
           <label>password</label>
        </div>
         )  
     }
 }

 const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
  })
export default connect(mapStateToProps)(AdminDashboard)