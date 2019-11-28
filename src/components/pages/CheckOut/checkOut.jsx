import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../../redux/cart/cartSelector'
import CheckOutItem from '../../checkOutItem/checkOutItem';
import StripeCheckoutButton from '../../stripeButton/StripeButton';
import './checkOutStyles.scss';

const CheckOutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Produce</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckOutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }
        <div className='total'>
            TOTAL: £{total}
        </div>
        <div className = "test-warning">
            *This is a Demo. To test payment function please use dummy info <br/>
            card number - 4242 4242 4242 4242 <br /> exp 01/20 cvc 123
        </div>
        <StripeCheckoutButton price={total} />

    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems ,
    total: selectCartTotal
   
});

export default connect(mapStateToProps)(CheckOutPage);
