import React from "react";
import { SignupContainer } from "../sign-up/sign-up.styles";

import { SpinnerContainer, SpinnerOverlay} from './spinner.styles';

 const Spinner = () => (

    <SpinnerOverlay>
        <SignupContainer />
    </SpinnerOverlay>
);

export default Spinner;