import { useState } from "react";
import Button from "./components/Button";

const App = () => {
    const [count, setCount] = useState(0);

    const handleDecrement = () => setCount(count - 1);
    const handleReset = () => setCount(0);
    const handleIncrement = () => setCount(count + 1);

    return (
        <div>
            <div>{count}</div>
            <Button onClick={handleDecrement} title="minus" />
            <Button onClick={handleReset} title="reset" />
            <Button onClick={handleIncrement} title="plus" />
        </div>
    );
};

export default App;
