'use client';

import React, { useState } from 'react';

const UserProfile: React.FC = () => {
  // State for editing profile info
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('John Doe');
  const [username, setUsername] = useState('john_doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [profilePic, setProfilePic] = useState('');

  // State for preferences
  const [sliders, setSliders] = useState([5, 5, 5, 5, 5]);
  const [theme, setTheme] = useState('');

  // State for stats
  const [xp, setXp] = useState(1000);
  const [coins, setCoins] = useState(250);
  const [hours, setHours] = useState(45);

  // Handle changes in sliders
  const handleSliderChange = (index: number, value: number) => {
    const newSliders = [...sliders];
    newSliders[index] = value;
    setSliders(newSliders);
  };

  // Save preferences
  const handleSavePreferences = () => {
    alert('Preferences saved!');
  };

  // Reset preferences
  const handleResetPreferences = () => {
    setSliders([5, 5, 5, 5, 5]);
    setTheme('');
    alert('Preferences reset!');
  };

  // Handle editing
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  // Function to generate initials from name
  const getInitials = (fullName: string) => {
    const nameParts = fullName.split(' ');
    const initials = nameParts.map((part) => part.charAt(0).toUpperCase()).join('');
    return initials;
  };

  return (
    <div className="flex my-5 max-w-[80rem] gap-5 mx-auto justify-center bg-black bg-opacity-50 rounded-xl">
      {/* Info Column */}
      <div className="flex flex-col flex-stretch justify-center w-1/3 p-6 text-center items-center">
        {profilePic ? (
          <img
            src={profilePic}
            alt="Profile"
            className="w-48 h-48 mx-auto rounded-full border-4 border-primary"
          />
        ) : (
          <div
            className="w-48 h-48 mx-auto flex items-center justify-center rounded-full bg-white text-black font-bold text-2xl"
          >
            {getInitials(name)}
          </div>
        )}
        <div className="mt-6 text-foreground">
          <h3 className="text-3xl font-semibold mb-2">{name}</h3>
          <p className="text-xl text-background-light mb-2">@{username}</p>
          <p className="text-lg text-background-light">{email}</p>
        </div>
        <button
          onClick={() => alert('Logging out...')}
          className="mt-6 px-4 py-2 bg-theme-red text-white rounded-lg hover:bg-theme-yellow transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Preferences Column */}
      <div className="w-1/3 p-6 bg-background bg-opacity-50">
        <h3 className="text-xl font-semibold text-foreground mb-4">Preferences</h3>
        {sliders.map((slider, index) => (
          <div key={index} className="mb-4 flex items-center">
            <input
              type="range"
              min="0"
              max="10"
              value={slider}
              onChange={(e) => handleSliderChange(index, parseInt(e.target.value))}
              className="w-full"
            />
            <p className="text-lg text-white ml-4">{slider}</p>
          </div>
        ))}
        <textarea
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          placeholder="Theme"
          rows={4}
          className="w-full p-2 mt-4 border border-background-accent rounded-lg"
        />
        <div className="mt-4 flex justify-center gap-6">
          <button
            onClick={handleSavePreferences}
            className="px-4 py-2 bg-theme-green text-white rounded-lg"
          >
            Save
          </button>
          <button
            onClick={handleResetPreferences}
            className="px-4 py-2 bg-theme-red text-white rounded-lg"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Stats Column */}
      <div className="flex flex-col flex-stretch justify-center w-1/3 p-6 py-auto text-center text-background-light">
        <h3 className="text-2xl font-semibold text-foreground mb-6">Stats</h3>
        <p className="text-2xl mb-4">XP: <span className="font-bold">{xp}</span></p>
        <p className="text-2xl mb-4">Coins: <span className="font-bold">{coins}</span></p>
        <p className="text-2xl ">Hours: <span className="font-bold">{hours}</span></p>
      </div>

    </div>
  );
};

export default UserProfile;
