import React from 'react';
import styles from './MealItem.module.css';

function MealItem(props) {
    return (
        <li className={styles.meal}>
            <div>
                <h3>Sushi</h3>
                <div className={styles.description}>Finest fish and veggies</div>
                <div className={styles.price}>$22.99</div>
            </div>
            <div>

            </div>
        </li>
    );
}

export default MealItem;