'use client';

import React from 'react';
import Quest from './quest';
import { completeQuest } from '@/lib/quests';

interface Props {
  _id: any;
  name: string;
  organization_name: string;
  time: string;
  chapter: { chapter_text: string };
}

const CompletedQuest: React.FC<Props> = ({ _id, name, organization_name, time, chapter }) => {
  return (
    <div className="flex items-center gap-3 flex-col lg:flex-row">
      <Quest
        title={name}
        org={organization_name}
        date={new Date(time).toLocaleString('en-US', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true })}
      />
      <p className="text-center lg:text-left lg:max-w-none indent-10">
        {chapter.chapter_text}
      </p>
    </div>
  );
}

export default CompletedQuest;