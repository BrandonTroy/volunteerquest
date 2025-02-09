import React from 'react';
import Reward from '@/components/reward';

const rewards = [
  { title: "Amazon Giftcard", value: "$25", cost:"250" },
  { title: "LEGO Giftcard", value: "$50", cost:"500" },
  { title: "BestBuy Giftcard", value: "$25", cost:"250" },
  { title: "Starbucks Giftcard", value: "$15", cost:"150" },
  { title: "ULTA Giftcard", value: "$25", cost:"250" },
  { title: "Krispy Kream Giftcard", value: "$10", cost:"100" },
  { title: "Outback Giftcard", value: "$25", cost:"250" },
  { title: "Dunkin Donuts Giftcard", value: "$10", cost:"100" },
  { title: "Visa Giftcard", value: "$50", cost:"500" },
  { title: "Visa giftcard", value: "$25", cost:"250" }
];

const RewardsPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 w-fit mx-auto p-5">
      {rewards.map((reward, index) => (
        <div key={index} className="bg-black bg-opacity-50 rounded-xl h-full flex">
          <Reward {...reward} />
        </div>
        ))}
    </div>
  );
};

export default RewardsPage;