import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51JrB82LXLc6RQBpHwh9xIxjIZEPR9vvVOlT1rcOjDXAS2gubDCmvAPsd81LoJhScB1MjcE8yxsqfbo6jX5VI8Hz300SVfgd3pf';

  const onToken = token => {
    
    axios({
        url: '/payment',
        method: 'post', 
        data: {
            amount: priceForStripe,
            token
        }
    }).then(res => {
        alert('Your payment has been processed successfully.');
    }).catch(err => {
        console.log('Payment error: ', err);
        alert('Your payment didn\'t go through. Please be sure to use the provided credit cards');
    });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='KRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;