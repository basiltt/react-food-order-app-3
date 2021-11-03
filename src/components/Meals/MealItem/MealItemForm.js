import React from 'react';
import styles from './MealItemForm.module.css'
import Input from "../../UI/Input";

function MealItemForm(props) {
    return (
        <form className={styles.form}>
            <Input label={'Amount'} input={{
                type: 'number',
                id: 'amount_' + props.id,
                min: '1',
                step: 1,
                max: 5,
                defaultValue: '1'
            }}/>
            <button>+ Add</button>
        </form>
    );
}

export default MealItemForm;