import React from 'react';

import CustomButton from '../customButton/CustomButton';

import './cartDropdownStyles.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

export default CartDropdown;