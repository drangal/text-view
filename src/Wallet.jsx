import { useSelector } from "react-redux";

const Wallet = () => {
    const cash = useSelector(state => state.cash);

    return (
        <div>{cash}</div>
    );
};

export { Wallet }