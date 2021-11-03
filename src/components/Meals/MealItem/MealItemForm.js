import React from 'react';
import styles from './MealItemForm.module.css'

function MealItemForm(props) {
    return (
        <form className={styles.form}>
            <div>
                <label htmlFor="dummy_id">Amount</label>
                <input id="dummy_id" type="number" min="1" max="5" step="1" defaultValue="1"/>
            </div>
            <button>+ Add</button>
        </form>
    );
}

export default MealItemForm;