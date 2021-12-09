import React, { useState } from "react";
import { ContactFormContainer } from "../../components/contact-us/contact-us.styles";
import CustomButton from "../../components/custom-button/custom-button.component";


// import ContactUs from "../../components/contact-us/contact-us.component";
import './contact-us.page.styles';

export const ContactUsPage = () => {
    

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('form submitted');
    }

return(
    <ContactFormContainer>
<h2>Do we know each other yet?</h2>
<form onSubmit={handleSubmit}>
    <div><span>First Name</span>
        <input type='First Name' label='First name' name='firstname' value='firstname' />
    </div>
    <div><span>Last Name</span>
        <input type='Last Name' label='Last Name name' name='lastname' value='lastname' />
    </div>
    <div><span>Date of Birth</span>
        <input type='DOB' label='DOB' name='dob' value='dob' />
    </div>
    <div><span>Email</span>
        <input type='email' label='Email' name='email' value='email' />
    </div>
    <div><span>Password</span>
        <input type='password' label='Password' name='password' value='password' />
    </div>
    <div><span>Confirm Password</span>
        <input type='password' label='Confirm password' name='confirmpassword' value='confirmpassword' />
    </div>
    <CustomButton type='submit' > Sign Me Up </CustomButton>
</form>
</ ContactFormContainer>
)
};

export default ContactUsPage;