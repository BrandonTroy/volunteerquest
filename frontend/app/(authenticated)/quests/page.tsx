"use client";

import React, { useState, useEffect } from 'react';
import PotentialQuest from '@/components/potentialQuest';
import { getQuests } from '@/lib/quests';

const QuestsPage = () => {
  const [quests, setQuests] = useState<any>([]);

  useEffect(() => {
    getQuests().then((response) => {
      console.log(response.data);
      setQuests(response.data.filter((quest: any) => !quest.completed));
    });
  }, []);
  
  return (
    <div className="bg-black bg-opacity-50 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 my-10 w-fit mx-auto rounded-xl p-5">
      {quests?.map((quest: any, index: any) => (
        <PotentialQuest key={index} {...quest.org_quest}/>
      ))}
    </div>
  );
};

export default QuestsPage;