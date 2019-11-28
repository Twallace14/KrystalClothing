import React from 'react';
import {connect} from 'react-redux';
import CartItem from '../cartItem/CartItem';
import {selectCartItems} from '../../redux/cart/cartSelector';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cartAction';


import CustomButton from '../customButton/CustomButton';

import './cartDropdownStyles.scss';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ?
                cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            )):
            <span className='empty-message'> Your Cart is empty </span>}
        </div>
        <CustomButton onClick={()=> {
            history.push('./checkout');
        dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
});
export default withRouter(connect (mapStateToProps)(CartDropdown));