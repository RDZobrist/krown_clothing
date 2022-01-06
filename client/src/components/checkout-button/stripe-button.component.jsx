import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { clearCart } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ price, clearCart }) => {
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
        clearCart();

    }).catch(err => {
        console.log('Payment error: ', err);
        clearCart();
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

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())

})

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);