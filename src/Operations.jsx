import { useDispatch } from "react-redux";

const Operations = () => {
    const dispatch = useDispatch();

    const addCash = (cash) => {
        dispatch({type: "ADD_CASH", payload: cash})
    };
    const getCash = (cash) => {
        dispatch({type: "GET_CASH", payload: cash})
    };
    
    return (
        <div>
            <button onClick={() => addCash(+prompt())}>Пополнить счёт</button>
            <button onClick={() => getCash(+prompt())}>Снять со счёта</button>
        </div>
    );
};

export { Operations }