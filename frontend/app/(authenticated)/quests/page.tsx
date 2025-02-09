"use client";

import React, { useState, useEffect } from 'react';
import PotentialQuest from '@/components/potentialQuest';
import { getQuests } from '@/lib/quests';

// const quests = [
//   { title: "Quest 1", org: "Organization 1", date: "00/00/0000", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio natus assumenda nulla, ea perspiciatis, recusandae eos doloribus molestias aliquam commodi? Modi obcaecati nulla vitae aut temporibus, quia sunt consectetur." },
//   { title: "Quest 2", org: "Organization 2", date: "00/00/0000", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio natus assumenda nulla, ea perspiciatis, recusandae eos doloribus molestias aliquam commodi? Modi obcaecati nulla vitae aut temporibus, quia sunt consectetur." },
//   { title: "Quest 3", org: "Organization 3", date: "00/00/0000", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio natus assumenda nulla, ea perspiciatis, recusandae eos doloribus molestias aliquam commodi? Modi obcaecati nulla vitae aut temporibus, quia sunt consectetur." },
//   { title: "Quest 4", org: "Organization 4", date: "00/00/0000", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio natus assumenda nulla, ea perspiciatis, recusandae eos doloribus molestias aliquam commodi? Modi obcaecati nulla vitae aut temporibus, quia sunt consectetur." },
//   { title: "Quest 5", org: "Organization 5", date: "00/00/0000", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio natus assumenda nulla, ea perspiciatis, recusandae eos doloribus molestias aliquam commodi? Modi obcaecati nulla vitae aut temporibus, quia sunt consectetur." },
//   { title: "Quest 6", org: "Organization 6", date: "00/00/0000", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio natus assumenda nulla, ea perspiciatis, recusandae eos doloribus molestias aliquam commodi? Modi obcaecati nulla vitae aut temporibus, quia sunt consectetur." },
//   { title: "Quest 7", org: "Organization 7", date: "00/00/0000", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio natus assumenda nulla, ea perspiciatis, recusandae eos doloribus molestias aliquam commodi? Modi obcaecati nulla vitae aut temporibus, quia sunt consectetur." },
//   { title: "Quest 8", org: "Organization 8", date: "00/00/0000", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio natus assumenda nulla, ea perspiciatis, recusandae eos doloribus molestias aliquam commodi? Modi obcaecati nulla vitae aut temporibus, quia sunt consectetur." },
//   { title: "Quest 9", org: "Organization 9", date: "00/00/0000", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio natus assumenda nulla, ea perspiciatis, recusandae eos doloribus molestias aliquam commodi? Modi obcaecati nulla vitae aut temporibus, quia sunt consectetur." },
// ];

const QuestsPage = () => {
  const [quests, setQuests] = useState<any>(null);

  useEffect(() => {
    getQuests().then((response) => {
      console.log(response.data);
      setQuests(response.data);
    });
  }, []);
  
  return (
    <div className="bg-black bg-opacity-50 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 my-10 w-fit mx-auto rounded-xl p-5">
      {quests?.map((quest: any, index: any) => (
        <PotentialQuest key={index} {...quest.org_quest} />
      ))}
    </div>
  );
};

export default QuestsPage;