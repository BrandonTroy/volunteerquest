'use client';

import React, { useState, useEffect } from 'react';
import CompletedQuest from '@/components/completedQuest';
import '@/app/globals.css';
import { getStories, getGuild } from '@/lib/quests';

const StoryPage = () => {

  const [ stories, setStories ] = useState<any>([]);
  const [ guild, setGuild ] = useState('');
  const user = { guild: { name: '' } }; // Define user variable

  useEffect(() => {
    getStories().then((response) => {
      setStories(response.data);
    });
    getGuild().then((response) => {
      setGuild(response.data?.name);
    });
  }, []);

  return (
    <>
      {guild && (
        <div className="flex items-center justify-center h-screen">
          <div className="text-2xl text-white">
            Guild Story: {guild}
          </div>
        </div>
      )}
      {stories.length === 0 ? (
        <div className="flex items-center justify-center h-screen">
          <div className="text-2xl text-white">
            Complete some quests to build your story
          </div>
        </div>
      ) : (
        <div className="bg-black bg-opacity-0 ap-5 max-w-[60rem] my-10 w-fit mx-auto rounded-xl p-5 gap-3 flex flex-col">
          {stories.map((story: any, index: number) => (
            <div
              key={index}
              className={`${index % 2 === 0 ? 'md:ml-3' : 'md:-ml-3'}`}
            >
              <CompletedQuest {...story} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default StoryPage;