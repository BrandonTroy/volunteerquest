import React from 'react';
import Quest from '@/components/quest';

interface Props {
  title: string;
  org: string;
  date: string;
  xp: string;
  story: string;
}

const CompletedQuest: React.FC<Props> = ({ title, org, date, xp, story }) => {
  return (
    <div className="flex items-center gap-3 flex-col md:flex-row">
      <Quest title={title} org={org} date={date} xp={`XP Earned: ${xp}`} />
      <p className='text-center max-w-[30rem] md:text-left md:max-w-none'>
        {story}
      </p>
    </div>
  );
}

export default CompletedQuest;