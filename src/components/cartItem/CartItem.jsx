import React from 'react';

import './cartItemStyles.scss';

const CartItem =({ item: {imageUrl, price, name, quantity}}) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <span className='name'>{name}</span>
        <span className='price'>£{price}</span>
        {quantity} x £{price}
    </div>
);

export default CartItem;