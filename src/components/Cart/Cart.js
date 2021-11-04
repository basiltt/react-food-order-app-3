import React from 'react';
import styles from './Cart.module.css'
import Modal from "../UI/Modal";


function Cart(props) {
    const cartItems = (
        <ul className={styles['cart-items']}>
            {[{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map((item) => <li>{item.name}</li>)}
        </ul>
    );
    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>$23.22</span>
            </div>
            <div className={styles.actions}>
                <button onClick={props.onHideCart}>Close</button>
                <button>Order</button>
            </div>
        </Modal>
    );
}

export default Cart;