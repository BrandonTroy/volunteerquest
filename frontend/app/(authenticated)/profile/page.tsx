'use client';

import React, { useState, useEffect } from 'react';
import { getUser, logout, updateInterests } from '@/lib/user';

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [interests, setInterests] = useState<any>({});
  const [theme, setTheme] = useState<string>('');

  useEffect(() => {
    getUser().then(response => {
      setUser(response.data);
      setTheme(response.data.theme);
      setInterests(response.data.interests);
      console.log(response.data)
    });
  }, []);

  // Handle changes in interests
  const handleSliderChange = (key: string, value: number) => {
    const newInterests = { ...interests };
    newInterests[key] = value;
    setInterests(newInterests);
  };

  // Reset interests
  const handleResetInterests = () => {
    setInterests(user.interests);
    setTheme(user.theme);
  };

  // Function to generate initials from name
  const getInitials = (fullName: string) => {
    const nameParts = fullName.split(' ');
    const initials = nameParts.map((part) => part.charAt(0).toUpperCase()).join('');
    return initials;
  };

  return (
    user ?
    <div className="flex my-5 max-w-[80rem] gap-5 mx-auto justify-center bg-black bg-opacity-50 rounded-xl">
      {/* Info Column */}
      <div className="flex flex-col flex-stretch w-[30%] py-6 items-center">   
        <div
          className="w-40 h-40 mx-auto flex items-center justify-center rounded-full bg-white text-black font-bold text-3xl"
        >
          {getInitials(user.name)}
        </div>
        <div className="mt-6 text-foreground">
          <h3 className="text-lg font-semibold">{user.name}</h3>
          <p className="text-lg text-background-light">@{user.username}</p>
          <p className="text-lg text-background-light">{user.email}</p>
        </div>
        <button
          onClick={() => logout()}
          className="mt-6 px-4 py-2 bg-theme-red text-white rounded-lg"
        >
          Logout
        </button>
      </div>

      {/* Interests Column */}
      <div className="w-[40%] p-6 bg-background bg-opacity-50">
        <h3 className="text-lg font-semibold text-foreground mb-4">Interests</h3>
        {Object.entries(interests).map(([name, value]: any, index: any) => (
          <div key={index} className="mb-4">
            <div className="-mb-1">{name}</div>
            <div className="flex items-center">
              <input
                type="range"
                min="0"
                max="10"
                value={value * 10}
                onChange={(e) => handleSliderChange(name, parseInt(e.target.value) / 10)}
                className="w-full"
              />
              <p className="text-white ml-4">{value * 10}</p>
            </div>
          </div>
        ))}
        <textarea
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          placeholder="Theme"
          rows={4}
          className="w-full p-2 mt-4 border text-background border-background-accent rounded-lg"
        />
        <div className="mt-4 flex justify-center gap-6">
          <button
              onClick={() => {
                updateInterests(interests, theme)
                const newUser = { ...user, interests, theme };
                setUser(newUser);
              }}
            className="px-4 py-2 bg-theme-green text-white rounded-lg"
          >
            Save
          </button>
          <button
            onClick={handleResetInterests}
            className="px-4 py-2 bg-theme-red text-white rounded-lg"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Stats Column */}
      <div className="flex flex-col flex-stretch w-[30%] p-6 py-auto text-center text-background-light">
        <h3 className="text-lg font-semibold text-foreground mb-6">Stats</h3>
        <p className="text-lg mb-4">XP: <span className="font-bold">{user.stats.xp}</span></p>
        <p className="text-lg mb-4">Coins: <span className="font-bold">{user.stats.coins}</span></p>
        <p className="text-lg ">Hours: <span className="font-bold">{user.stats.hours}</span></p>
      </div>

    </div>
    : <div className="flex items-center justify-center h-screen">
        <div className="text-2xl text-white">
          Loading...
        </div>
      </div>
  );
};

export default UserProfile;
