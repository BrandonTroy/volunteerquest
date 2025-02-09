import React from 'react';
import Quest from '@/components/quest';

interface Props {
  title: string;
  org: string;
  date: string;
  story: string;
}

const CompletedQuest: React.FC<Props> = ({ title, org, date, story }) => {
  return (
    <div className="flex">
      <Quest title={title} org={org} date={date} />
      <p className="my-auto">
        {story}
      </p>
    </div>
  );
}

export default CompletedQuest;