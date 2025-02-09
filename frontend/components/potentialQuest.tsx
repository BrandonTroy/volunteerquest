'use client';

import React from 'react';
import Quest from './quest';
import { completeQuest } from '@/lib/quests';

interface Props {
  _id: any;
  name: string;
  organization_name: string;
  time: string;
  description: string;
}

const PotentialQuest: React.FC<Props> = ({ _id, name, organization_name, time, description }) => {
  return (
    <div className="w-20rem flex flex-col">
      <Quest title={name} org={organization_name} date={new Date(time).toLocaleString('en-US', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true })} description={description}>
        <div className="flex-row items-center justify-center mx-auto mt-5">
          <button className="justify-center rounded-md bg-theme-green w-[8.5rem] px-3 mx-2 py-1 text-base"
            onClick={() => completeQuest(_id.$oid)}
          >
            {/* Accept */}Completed
          </button>
          {/* <button className="justify-center rounded-md bg-theme-red w-[8.5rem] px-3 mx-2 py-1 text-base">
            Reject
          </button> */}
        </div>
      </Quest>
    </div>
  );
}

export default PotentialQuest;