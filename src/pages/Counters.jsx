import React from "react";
import { useEffect, useState } from "react";

export const Counters = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    useEffect(() => {setCount1(count1 + 1);}, []);

    useEffect(() => {
        setTimeout(() => {
            setCount2(count2 + 1);
        }, 1000)
    });

    useEffect(() => {setCount3(count3 + 1)}, [count2]);

    return (
        <div>
            <p>Count1: {count1}</p>
            <p>Count2: {count2}</p>
            <p>Count3: {count3}</p>
        </div>
    );
}