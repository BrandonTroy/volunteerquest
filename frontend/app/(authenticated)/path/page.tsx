import React from 'react';
import CompletedQuest from '@/components/completedQuest';

const CompletedQuestsPage = () => {
  return (
    <div className="bg-black bg-opacity-50 ap-5 max-w-7xl mx-auto my-10 w-fit mx-auto rounded-xl p-5">
      <CompletedQuest title="Quest 6" org="Organization 6" date="00/00/0000" story="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio natus assumenda nulla, ea perspiciatis, recusandae eos doloribus molestias aliquam commodi? Modi obcaecati nulla vitae aut temporibus, quia sunt consectetur." />
      <CompletedQuest title="Quest 5" org="Organization 5" date="00/00/0000" story="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio natus assumenda nulla, ea perspiciatis, recusandae eos doloribus molestias aliquam commodi? Modi obcaecati nulla vitae aut temporibus, quia sunt consectetur." />
      <CompletedQuest title="Quest 4" org="Organization 4" date="00/00/0000" story="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio natus assumenda nulla, ea perspiciatis, recusandae eos doloribus molestias aliquam commodi? Modi obcaecati nulla vitae aut temporibus, quia sunt consectetur." />
      <CompletedQuest title="Quest 3" org="Organization 3" date="00/00/0000" story="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio natus assumenda nulla, ea perspiciatis, recusandae eos doloribus molestias aliquam commodi? Modi obcaecati nulla vitae aut temporibus, quia sunt consectetur." />
      <CompletedQuest title="Quest 2" org="Organization 2" date="00/00/0000" story="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio natus assumenda nulla, ea perspiciatis, recusandae eos doloribus molestias aliquam commodi? Modi obcaecati nulla vitae aut temporibus, quia sunt consectetur." />
      <CompletedQuest title="Quest 1" org="Organization 1" date="00/00/0000" story="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio natus assumenda nulla, ea perspiciatis, recusandae eos doloribus molestias aliquam commodi? Modi obcaecati nulla vitae aut temporibus, quia sunt consectetur." />
   </div>
  );
}

export default CompletedQuestsPage;