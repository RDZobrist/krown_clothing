import React, { useState } from "react";
import { connect } from 'react-redux';
import CustomButton from '../../components/custom-button/custom-button.component';
import FormInput from '../../components/form-input/form-input.component';
import { AdminDashboardPageWrapper } from "./admin-dashboard.styles";
import './admin-dashboard.styles';
import { checkAdminCredentials } from '../../redux/admin/admin.user.actions'
import { CustomButtonContainer } from "../../components/custom-button/custom-button.styles";

const AdminDashboard = ({ checkAdminCredentials, userCredentials }) => {
  const handleSubmit = async event => {
    event.preventDefault();
    checkAdminCredentials(userCredentials);
  };
  const handleChange = event => {
    const { value, name } = event.target.value;

    setAdminCredentials({ ...adminCredentials, [name]: value });
  };
  const [adminCredentials, setAdminCredentials] = useState({ email: '', password: '' })
  const { email, password } = adminCredentials;

  return (
    <AdminDashboardPageWrapper >
      <form className='admin-login-form' onSubmit={(event) => event.preventDefault()}>
        <FormInput
          label='email'
          name='email'
          type='email'
          value={adminCredentials.email}
          handleChange={handleChange}
          autoComplete='false'
        />
        <FormInput
          type='password'
          handleChange={handleChange}
          name='password'
          label='password'
          autoComplete='false'
          value={password}
        />
        <CustomButton handleSubmit={handleSubmit}> sign in </CustomButton>
      </form>
    </AdminDashboardPageWrapper>
  )
};
const mapDispatchToProps = dispatch => ({
  checkAdminCredentials: (userCredentials) => dispatch(checkAdminCredentials(userCredentials))
});

export default connect(null, mapDispatchToProps)(AdminDashboard);