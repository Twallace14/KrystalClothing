import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishablekey = "pk_test_QfPf3N2413J3gdiLjZdn5Z3Z00TS5XC2aR"

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };
    return (
        <StripeCheckout
        label='Pay now'
        name='Krystal Clothing'
        billingAddress
        shippingAddress
        image=""
        description={`your total is £${price}`}
        amount={priceForStripe}
        panelLabel='Pay now'
        token = {onToken}
        stripeKey={publishablekey}
        currency='GBP'
        />
    );
 };

 export default StripeCheckoutButton;