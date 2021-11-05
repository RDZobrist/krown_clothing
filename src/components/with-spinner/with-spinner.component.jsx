import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer /><br />
            <SpinnerContainer /><br />
            <br />
            <h2><br />  We're working on it...  </h2>
            <SpinnerContainer /><br />
            <SpinnerContainer /><br />
        </SpinnerOverlay>

    ) : (
        <WrappedComponent {...otherProps} />
    )
}

export default WithSpinner;