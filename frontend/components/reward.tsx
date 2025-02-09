'use client';

import React from 'react';
import { buy } from '@/lib/user';

interface Props {
  title: string;
  value: string;
  cost: string;
}

const Reward: React.FC<Props> = ({title, value, cost}) => {
  
  return (
    <div className="bg-theme-yellow flex flex-col flex-grow items-center justify-center p-4 m-4 rounded-lg">
      <div className="max-w-[20rem] min-w-[15rem] h-auto flex flex-col items-center">
        <h1 className="text-black text-center text-lg mb-0 p-0 leading-none">
          {title}
        </h1>
        <p className="text-black text-base">
          {value}
        </p>
      </div>
      <button className="justify-center rounded-md bg-theme-green w-[8.5rem] px-3 mx-2 py-1 mt-3 text-base" onClick={() => buy(parseFloat(cost))}>
        <img src="/coin.png" className="inline-block w-10 h-10 mr-0" alt="Coin" /> 
        {cost} Buy
      </button>
    </div>
  );

}

export default Reward;