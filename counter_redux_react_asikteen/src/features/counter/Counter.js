import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    reset,
    incrementByAmount
} from './counterSlice';
import { useState } from "react";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0);

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    const handleChange = (e) => {
        setIncrementAmount(e.target.value);
    };

    const handleAddAmount = () => {
        dispatch(incrementByAmount(Number(incrementAmount)));
    }

    return (
        <section>
            <p>{count}</p>

            <input
                className="input-counter"
                type="text"
                value={incrementAmount}
                onChange={handleChange}
            />

            <AddMount 
                addmount="button-addmount"
                reset="button-reset"
                incrementAmount={incrementAmount} 
                setIncrementAmount={setIncrementAmount}
                resetAll={resetAll} 
                handleAddAmount={handleAddAmount}/>

            <TambahKurang tambahkurang="button-tambahkurang"/>

        </section>
    )
}
export default Counter;

export const TambahKurang = ({tambahkurang}) => {
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    }

    const handleDecrement = () => {
        dispatch(decrement());
    }
    
    return( 
        <div>
            <button className={tambahkurang} onClick={handleIncrement}>+</button>
            <button className={tambahkurang} onClick={handleDecrement}>-</button>
        </div>
    );
}

export const AddMount = ({ resetAll, handleAddAmount, addmount, reset}) => {
    const handleReset = () => {
        resetAll();
    }

    return (
        <div>
            <button className={addmount} onClick={handleAddAmount}>Add Amount</button>
            <button className={reset} onClick={handleReset}>Reset</button>
        </div>
    );
}
