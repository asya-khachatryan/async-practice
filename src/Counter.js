import { useSelector, useDispatch } from "react-redux";
import {
    updateCounterAsync
} from './counterSlice';
import { useState } from "react";
import LoadingIcon from "./loading.gif";


const Counter = () => {
    const value = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.counter.isLoading)

    const [field, setField] = useState(0);

    return (
        <div>
            <h2>{value}</h2>
            <input
                type="text"
                onChange={(e) => setField(e.target.value)}
            />
            <br></br>
            <br></br>
            <button onClick={() => dispatch(updateCounterAsync(field))}>Submit</button>
            <br></br>
            <br></br>
            {isLoading && <img alt="loading" src={LoadingIcon} style={{ width: "50px" }} />}
        </div>
    )
}
export default Counter