import React from 'react';
import Reward from '@/components/reward';

const rewards = [
  { title: "Reward 1", value: "$100", cost:"1" },
  { title: "Reward 2", value: "$200", cost:"2" },
  { title: "Reward 3", value: "$300", cost:"3" },
  { title: "Reward 4", value: "$400", cost:"4" },
  { title: "Reward 5", value: "$500", cost:"5" },
  { title: "Reward 6", value: "$600", cost:"6" },
  { title: "Reward 7", value: "$700", cost:"7" },
  { title: "Reward 8", value: "$800", cost:"8" },
  { title: "Reward 9", value: "$900", cost:"9" },
  { title: "Reward 10", value: "$1000", cost:"10" },
  { title: "Reward 11", value: "$1100", cost:"11" },
  { title: "Reward 12", value: "$1200", cost:"12" },
  { title: "Reward 13", value: "$1300", cost:"13" },
  { title: "Reward 14", value: "$1400", cost:"14" },
  { title: "Reward 15", value: "$1500", cost:"15" },
];

const RewardsPage = () => {
  return (
    <div className="bg-black bg-opacity-50 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10 w-fit mx-auto rounded-xl p-5">
      {rewards.map((reward, index) => (
        <Reward key={index} {...reward} />
      ))}
    </div>
  );
};

export default RewardsPage;