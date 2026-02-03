import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeItem, selectCartItems, updateQuantity} from './CartSlice';
import './CartItem.css';

const CartItem = ({onContinueShopping}) => {
    const cart = useSelector(selectCartItems);
    const dispatch = useDispatch();

    // Parse numeric price from "$15" or "₹ 499" etc.
    const parsePrice = (cost) => {
        const n = parseFloat(String(cost).replace(/[^0-9.]/g, ''));
        return Number.isFinite(n) ? n : 0;
    };

    // Calculate total cost for one item (qty * unit)
    const calculateTotalCost = (item) => {
        return (parsePrice(item.cost) * item.quantity).toFixed(2);
    };

    // Calculate grand total
    const calculateTotalAmount = () => {
        return cart
            .reduce((sum, item) => sum + parsePrice(item.cost) * item.quantity, 0)
            .toFixed(2);
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        onContinueShopping && onContinueShopping(e);
    };

    const handleIncrement = (item) => {
        dispatch(updateQuantity({name: item.name, quantity: item.quantity + 1}));
    };

    const handleDecrement = (item) => {
        const next = item.quantity - 1;
        if (next <= 0) {
            dispatch(removeItem({name: item.name}));
        } else {
            dispatch(updateQuantity({name: item.name, quantity: next}));
        }
    };

    const handleRemove = (item) => {
        dispatch(removeItem({name: item.name}));
    };

    return (
        <div className="cart-container">
            <h3 className="total_cart_amount">Total Cart Amount: ${calculateTotalAmount()}</h3>

            {cart.map((item) => (
                <div className="cart-item" key={item.name}>
                    <img className="cart-item-image" src={item.image} alt={item.name}/>
                    <div className="cart-item-details">
                        <div className="cart-item-name">{item.name}</div>
                        <div className="cart-item-cost">Unit Price: {item.cost}</div>

                        <div className="cart-item-quantity">
                            <button className="cart-item-button" onClick={() => handleDecrement(item)}>-</button>
                            <span className="cart-item-quantity-value">{item.quantity}</span>
                            <button className="cart-item-button" onClick={() => handleIncrement(item)}>+</button>
                        </div>

                        <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>

                        <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
                    </div>
                </div>
            ))}

            {cart.length === 0 && <p>Your cart is empty.</p>}

            <div className="cart-actions">
                <button className="get-started-button1" onClick={handleContinueShopping}>Continue Shopping</button>
                <button className="get-started-button1" onClick={() => alert('Coming Soon')}>Checkout</button>
            </div>
        </div>
    );
};

export default CartItem;