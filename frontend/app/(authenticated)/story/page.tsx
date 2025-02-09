'use client';

import React, { useState, useEffect } from 'react';
import CompletedQuest from '@/components/completedQuest';
import '@/app/globals.css';
import { getStories } from '@/lib/quests';
import { getGuild } from '@/lib/guilds';

interface Guild {
  name: string;
}

const StoryPage = () => {
  const [stories, setStories] = useState<any>([]);
  const [guild, setGuild] = useState<Guild | null>(null);

  useEffect(() => {
    getStories().then((response) => {
      setStories(response.data);
      console.log(response.data)
    });
    getGuild().then((response) => {
      setGuild(response.data);
    });
  }, []);

  if (stories.length === 0 || stories[stories.length - 1].quests.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl text-white">
          Complete some quests to build your story
        </div>
      </div>
    );
  }

  return (
    <>
      {guild &&
        <div className="text-2xl text-white text-center mt-6 -mb-8">
          Guild Story: {guild.name}
        </div>
      }
      <div className="bg-black bg-opacity-0 gap-5 container my-10 w-fit mx-auto rounded-xl p-5 flex flex-col">
        {stories[stories.length - 1].quests.map((quest: any, index: number) => (
          <div
            key={index}
            className={`${index % 2 === 0 ? 'md:ml-4' : 'md:-ml-4'}`}
          >
            <CompletedQuest {...quest.org_quest} chapter={quest.chapter} />
          </div>
        ))}
      </div>
    </>
  );
}

export default StoryPage;