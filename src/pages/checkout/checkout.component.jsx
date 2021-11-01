import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
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
        <div className="total pre">
            <span>Total: ${new Intl.NumberFormat('en-us').format(total)}</span>
        </div>
        <div className="total pre">
            <span>Tax: ${tax.toFixed(2)}</span>
        </div>

        <div className="total">
            <span>Amount Due: ${new Intl.NumberFormat('en-us').format(total + tax)}</span>
        </div>
    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage)