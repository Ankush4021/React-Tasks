import React from 'react'
import { useState } from 'react';

const Counter = () => {

    const [count, setcount] = useState(0)

    return (
        <div className='h-80 w-90 bg-yellow-700 rounded-2xl flex items-center justify-center flex-col gap-5 p-4'>
            <h1 className='text-6xl font-semibold '>{count}</h1>

            <div className='flex gap-3'>
                <button onClick={() => setcount(count + 1)} className='active:scale-95 cursor-pointer bg-pink-700 px-5 py-2 text-2xl font-semibold rounded-2xl'>Increase</button>
                <button onClick={() => setcount(count - 1)} className='active:scale-95 cursor-pointer bg-pink-700 px-5 py-2 text-2xl font-semibold rounded-2xl'>Decrease</button>
            </div>
        </div>
    )
}

export default Counter
