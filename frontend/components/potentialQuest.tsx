import React from 'react';
import Quest from './quest';

interface Props {
  title: string;
  org: string;
  date: string;
  description: string;
}

const PotentialQuest: React.FC<Props> = ({ title, org, date, description }) => {
  return (
    <div className="w-20rem flex flex-col">
      <Quest title={title} org={org} date={date} description={description}>
        <div className="flex-row items-center justify-center mx-auto mt-5">
          <button className="justify-center rounded-md bg-theme-green w-[8.5rem] px-3 mx-2 py-1 text-base">
            Accept
          </button>
          <button className="justify-center rounded-md bg-theme-red w-[8.5rem] px-3 mx-2 py-1 text-base">
            Reject
          </button>
        </div>
      </Quest>
    </div>
  );
}

export default PotentialQuest;