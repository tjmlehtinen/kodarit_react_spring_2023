import React from "react";
import { useEffect, useState } from "react";

export const Counters = () => {
    const [count1, setCount1] = useState(0);
    useEffect(function() {setCount1(count1 + 1)}, []);
    return (
        <div>
            <p>Count1: {count1}</p>
        </div>
    );
}