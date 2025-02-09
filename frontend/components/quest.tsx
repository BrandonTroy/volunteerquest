import React from 'react';

interface Props {
  title: string;
  org: string;
  date: string;
  xp?: string;
  description?: string;
  children?: React.ReactNode;
}

const Quest: React.FC<Props> = ({ title, org, date, xp, description, children }) => {
  return (
    <div className="bg-theme-yellow flex flex-col items-center justify-center p-4 m-4 rounded-lg">
      <div className="max-w-[20rem] min-w-[15rem] h-auto flex flex-col items-center">
        <h1 className="text-black text-lg mb-0 p-0 leading-none">
          {title}
        </h1>
        <p className="text-black text-base">
          {org}
        </p>
        <p className="text-black text-base">
          {date}
        </p>
        {xp && <p className="text-black text-base">
          {xp}
        </p>}
        {description && <p className="text-black text-sm mt-2">
          {description}
        </p>}
      </div>
      {children}
    </div>
  );
}

export default Quest;