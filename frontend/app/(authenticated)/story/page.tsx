import React from 'react';
import CompletedQuest from '@/components/completedQuest';
import '@/app/globals.css';

const StoryPage = () => {
  const quests = [
    { title: "Quest 6", org: "Organization 6", date: "00/00/0000", xp: "0", story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio natus assumenda nulla, ea perspiciatis, recusandae eos doloribus molestias aliquam commodi? Modi obcaecati nulla vitae aut temporibus, quia sunt consectetur." },
    { title: "Quest 5", org: "Organization 5", date: "00/00/0000", xp: "0", story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio natus assumenda nulla, ea perspiciatis, recusandae eos doloribus molestias aliquam commodi? Modi obcaecati nulla vitae aut temporibus, quia sunt consectetur." },
    { title: "Quest 4", org: "Organization 4", date: "00/00/0000", xp: "0", story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio natus assumenda nulla, ea perspiciatis, recusandae eos doloribus molestias aliquam commodi? Modi obcaecati nulla vitae aut temporibus, quia sunt consectetur." },
    { title: "Quest 3", org: "Organization 3", date: "00/00/0000", xp: "0", story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio natus assumenda nulla, ea perspiciatis, recusandae eos doloribus molestias aliquam commodi? Modi obcaecati nulla vitae aut temporibus, quia sunt consectetur." },
    { title: "Quest 2", org: "Organization 2", date: "00/00/0000", xp: "0", story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio natus assumenda nulla, ea perspiciatis, recusandae eos doloribus molestias aliquam commodi? Modi obcaecati nulla vitae aut temporibus, quia sunt consectetur." },
    { title: "Quest 1", org: "Organization 1", date: "00/00/0000", xp: "0", story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio natus assumenda nulla, ea perspiciatis, recusandae eos doloribus molestias aliquam commodi? Modi obcaecati nulla vitae aut temporibus, quia sunt consectetur." },
  ];

  return (
    <div className="bg-black bg-opacity-0 ap-5 max-w-[60rem] my-10 w-fit mx-auto rounded-xl p-5 gap-3 flex flex-col">
      {quests.map((quest, index) => (
        <div
          key={index}
          className={`${index % 2 === 0 ? 'md:ml-3' : 'md:-ml-3'}`}
        >
          <CompletedQuest {...quest} />
        </div>
      ))}
    </div>
  );
}

export default StoryPage;