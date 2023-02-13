import React from "react";
import { useState } from "react";

export const Buttons = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    function countClicks1() {
        setCount1(count1 + 1);
    }

    function countClicks2() {
        setCount2(count2 + 1);
    }

    function resetClicks() {
        setCount1(0);
        setCount2(0);
    }

    return (
        <div>
            <button onClick={countClicks1}>Nappula: {count1}</button>
            <button onClick={countClicks2}>Nappula: {count2}</button>
            <button onClick={resetClicks}>Nollaa klikit</button>
        </div>
    );
}