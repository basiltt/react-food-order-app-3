import Header from "./components/Layout/Header";
import {Fragment} from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import {useState} from "react";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = event => {
        setCartIsShown(true);
    };

    const hideCartHandler = event => {
        setCartIsShown(false);
    };

    return (
        <Fragment>
            {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals />
            </main>
        </Fragment>
    );
}

export default App;
