import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';
import './spinner.styles.scss'
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <SpinnerOverlay>
                            <h1 className='spinner-title'>Almost there. . .</h1>

            <div class="sk-cube-grid">
                <div class="sk-cube sk-cube1"></div>
                <div class="sk-cube sk-cube2"></div>
                <div class="sk-cube sk-cube3"></div>
                <div class="sk-cube sk-cube2"></div>
                <div class="sk-cube sk-cube7"></div>
                <div class="sk-cube sk-cube7"></div>
                <div class="sk-cube sk-cube1"></div>
                <div class="sk-cube sk-cube3"></div>
                <div class="sk-cube sk-cube5"></div>
                <div class="sk-cube sk-cube7"></div>
                <div class="sk-cube sk-cube5"></div>
                <div class="sk-cube sk-cube3"></div>
                <div class="sk-cube sk-cube1"></div>
                <div class="sk-cube sk-cube3"></div>
                <div class="sk-cube sk-cube5"></div>
                <div class="sk-cube sk-cube7"></div>
                <div class="sk-cube sk-cube6"></div>
                <div class="sk-cube sk-cube4"></div>
                <div class="sk-cube sk-cube2"></div>
                <div class="sk-cube sk-cube1"></div>
                <div class="sk-cube sk-cube4"></div>
                <div class="sk-cube sk-cube6"></div>
                <div class="sk-cube sk-cube4"></div>
                <div class="sk-cube sk-cube2"></div>
                <div class="sk-cube sk-cube4"></div>
                <div class="sk-cube sk-cube6"></div>
                <div class="sk-cube sk-cube4"></div>
                <div class="sk-cube sk-cube6"></div>
    

            </div>
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
    )
}

export default WithSpinner;