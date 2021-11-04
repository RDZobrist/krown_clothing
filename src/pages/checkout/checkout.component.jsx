import React, { Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/checkout-button/stripe-button.component";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import './checkout.styles.scss';
import { CheckoutPageContainer, CheckoutHeaderContainer } from "./checkout.styles";

const CheckoutPage = ({currentUser, cartItems, total, tax = total * .08 }) => (
    <CheckoutPageContainer>

        {currentUser != null ? (<Fragment><h3>{currentUser.displayName}'s cart</h3><br/></Fragment>) :(null)}
        <CheckoutHeaderContainer>
            
            <div className="header-block"><span>Product</span></div>
            <div className="header-block"><span>Description</span></div>
            <div className="header-block"><span>Quantity</span></div>
            <div className="header-block"><span>Price</span></div>
            <div className="header-block"><span>Remove</span></div>
        </CheckoutHeaderContainer>
        {cartItems.map(cartItem => ( <CheckoutItem cartItem={cartItem} key={cartItem.id} />))}
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
                    {(total <= 49.99 && total > 0) ? (<Fragment><div className="total pre">Shipping and Handling free on orders over $50.00</div></Fragment>) : null}
                    <div className="test-warning">
                        * * * * <br />Please use the folowing credit card for payments
                        <br />
                        4242 4242 4242 4242
                        <br />
                        Exp: 11/26 -- CVV: 424
                    </div>

                    <StripeCheckoutButton price={new Intl.NumberFormat('en-us', {
                        style: 'currency',
                        currency: 'USD',
                        currencyDisplay: 'symbol',
                    }).format(total + tax)} />
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
    </CheckoutPageContainer>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
    currentUser: selectCurrentUser
})
export default connect(mapStateToProps)(CheckoutPage)