import React, { Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/checkout-button/stripe-button.component";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    SubtotalSpan,
    CheckoutHeaderBlock,
    TotalContainer,
    TestWarningccinfoContainer
} from "./checkout.styles";
import { getPerformance } from "firebase/performance";
const perf = const CheckoutPage = ({ currentUser, cartItems, total, tax = total * .08 }) => {
    return(
    <CheckoutPageContainer>

        {currentUser !== null ? (<Fragment><h3>{currentUser.displayName}'s cart</h3><br /></Fragment>) : (null)}
        <CheckoutHeaderContainer>

            <CheckoutHeaderBlock><span>Product</span></CheckoutHeaderBlock>
            <CheckoutHeaderBlock><span>Description</span></CheckoutHeaderBlock>
            <CheckoutHeaderBlock><span>Quantity</span></CheckoutHeaderBlock>
            <CheckoutHeaderBlock><span>Price</span></CheckoutHeaderBlock>
            <CheckoutHeaderBlock><span>Remove</span></CheckoutHeaderBlock>
        </CheckoutHeaderContainer>
        {cartItems.map(cartItem => (<CheckoutItem cartItem={cartItem} key={cartItem.id} />))}
        {cartItems.length
            ?
            (
                <Fragment>
                    <TotalContainer>
                        <SubtotalSpan>{new Intl.NumberFormat('en-us', {
                            style: 'currency',
                            currency: 'USD',
                            currencyDisplay: 'symbol',
                        }).format(total)}      subtotal</SubtotalSpan>
                    </TotalContainer>

                    <TotalContainer>

                        <SubtotalSpan>(+)   {new Intl.NumberFormat('en-us', {
                            style: 'currency',
                            currency: 'USD',
                            currencyDisplay: 'symbol',
                        }).format(tax)}      tax</SubtotalSpan>

                    </TotalContainer>
                    {(total > 0.01 && total <= 49.99) ? (<TotalContainer><SubtotalSpan>Shipping and Handling free on orders over $50.00</SubtotalSpan></TotalContainer>
                    ) : null}
                    <TotalContainer>

                        <span>Amount Due  {new Intl.NumberFormat('en-us', {
                            style: 'currency',
                            currency: 'USD',
                            currencyDisplay: 'symbol',
                        }).format(total + tax)}</span>
                    </TotalContainer>
                    <TestWarningccinfoContainer>
                        * * * * <br />Please use the folowing credit card for payments
                        <br />
                        4242 4242 4242 4242
                        <br />
                        Exp: 11/26 -- CVV: 424
                        <StripeCheckoutButton price={new Intl.NumberFormat('en-us', {
                            style: 'currency',
                            currency: 'USD',
                            currencyDisplay: 'symbol',
                        }).format(total + tax)} />
                    </TestWarningccinfoContainer>

                </ Fragment>
            )
            : <TotalContainer>

                <span>{new Intl.NumberFormat('en-us', {
                    style: 'currency',
                    currency: 'USD',
                    currencyDisplay: 'symbol',
                }).format(total + tax)}</span>
            </TotalContainer>
        }
    </CheckoutPageContainer>
    )
    }
    
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
    currentUser: selectCurrentUser
})
export default connect(mapStateToProps)(CheckoutPage)