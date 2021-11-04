import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishable_key = 'pk_test_51JrB82LXLc6RQBpHwh9xIxjIZEPR9vvVOlT1rcOjDXAS2gubDCmvAPsd81LoJhScB1MjcE8yxsqfbo6jX5VI8Hz300SVfgd3pf';

    const onToken = token => {
        console.log(token);
        /* this is where the backend server call will be made using tokento handle the payment*/
        alert('payment successful');
    }
    const onOpened = () => {
        console.log('stripe payment window opened')
    }
    const onClosed = () => {
        console.log('stripe payment window closed')
    }
    return (
        <div className="total">
        <StripeCheckout
            label={`Pay Now ${price}`}
            name="Krown Clothing" // the pop-in header title
            description="Providing you with all you your fashion since 2018" // the pop-in header subtitle
            image="https://svgshare.com/i/CUz.svg" 
            description={`Your total is ${price}`}
            ComponentClass="div"
            panelLabel={`Pay Now ${price}`}// prepended to the amount in the bottom pay button
            billingAddress
            shippingAddress
            amount={priceForStripe} 
            stripeKey={publishable_key}
            currency="USD"
            email="support@krown_clothing.io"
            // Note: enabling both zipCode checks and billing or shipping address will
            // cause zipCheck to be pulled from billing address (set to shipping if none provided).
            zipCode={false}
            allowRememberMe // "Remember Me" option (default true)
            token={onToken} // submit callback
            opened={onOpened} // called when the checkout popin is opened 
            closed={onClosed} // called when the checkout popin is closed 
            reconfigureOnUpdate={false}
        />
        </div>
    )
}

export default StripeCheckoutButton;