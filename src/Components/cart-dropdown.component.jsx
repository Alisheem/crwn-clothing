import React from 'react';
import CartItem from './cart-item.component';
import {connect} from 'react-redux';

import CustomButton from './custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => (
    
    <div className='cart-dropdown'>
        <div className='cart-items' >
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
     
        <CustomButton>Go To CHECKOUT</CustomButton>
    </div>

);

const mapStateToProps = ({cart: {cartItems}}) => ({
cartItems
})

export default connect(mapStateToProps)(CartDropdown);