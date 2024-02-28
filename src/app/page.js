"use client"

import Image from 'next/image'
import {useCallback, useState} from "react";


export default function Home() {
    const [value, setValue] = useState(global?.window?.localStorage?.getItem('value') ?? "0");

    const handleClick = useCallback(() => {
        setValue((prevValue) => {
            const newValue = parseInt(prevValue) + 1 + "";
            localStorage.setItem('value', newValue);
            return newValue;
        })
    }, []);

    return (
        <main className="flex flex-col items-center justify-between p-24  bg-gradient-to-b from-cyan-100 to-cyan-950 h-[2000px]">
            {value}
            <button onClick={handleClick} className="ring-offset-1 ring-amber-500 block">Click me!</button>
        </main>
    )
}
