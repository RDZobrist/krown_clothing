import React, { Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import  StripeCheckoutButton  from "../../components/checkout-button/stripe-button.component";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import './checkout.styles.scss';


const CheckoutPage = ({ cartItems, total, tax = total * .08 }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className="header-block"><span>Product</span></div>
            <div className="header-block"><span>Description</span></div>
            <div className="header-block"><span>Quantity</span></div>
            <div className="header-block"><span>Price</span></div>
            <div className="header-block"><span>Remove</span></div>
        </div>
        {cartItems.map(cartItem => (<CheckoutItem cartItem={cartItem} key={cartItem.id} />))}
        {cartItems.length
            ?
            (
                <Fragment>
                    <div className="total pre">
                        <span>{new Intl.NumberFormat('en-us', {
                            style: 'currency',
                            currency: 'USD',
                            currencyDisplay: 'symbol',
                        }).format(total)}      subtotal</span>
                    </div>
                    <div className="total pre">
                        <span>(+)   {new Intl.NumberFormat('en-us', {
                            style: 'currency',
                            currency: 'USD',
                            currencyDisplay: 'symbol',
                        }).format(tax)}      tax</span>
                    </div>
                    <div className="total">
                        <span>Amount Due(estimated) {new Intl.NumberFormat('en-us', {
                            style: 'currency',
                            currency: 'USD',
                            currencyDisplay: 'symbol',
                        }).format(total + tax)}</span>
                    </div>
                    <div className="total pre">Shipping and Handling free on orders over $50.00</div>
                </ Fragment>
            )
            : <div className="total">
                <span>{new Intl.NumberFormat('en-us', {
                    style: 'currency',
                    currency: 'USD',
                    currencyDisplay: 'symbol',
                }).format(total + tax)}</span>
            </div>
        }

        <StripeCheckoutButton price={new Intl.NumberFormat('en-us', {
                    style: 'currency',
                    currency: 'USD',
                    currencyDisplay: 'symbol',
                }).format(total + tax)} />
    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage)