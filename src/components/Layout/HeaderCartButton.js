import React, {useEffect, useState} from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from "../Cart/CartIcon";
import {useContext} from "react";
import CartContext from "../../store/cart-context";

function HeaderCartButton(props) {
    const [btnIsHighlighted, setButtonIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;
    const numberOfCartItems = items.reduce((curNumber, item) => {
            return curNumber + item.amount;
        }, 0
    );
    const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;
    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setButtonIsHighlighted(true);
        const timer = setTimeout(() => {
            setButtonIsHighlighted(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        };

    }, [items, cartCtx.items.length]);
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
    );
}

export default HeaderCartButton;