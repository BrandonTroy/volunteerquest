'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Test({children,}: Readonly<{children: React.ReactNode;}>) {
  
  const isActive = (path: string) => usePathname() === path;
  
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/quests">
            <div className="flex gap-2 text-white text-lg font-bold">
              <img className="mx-auto h-10 w-auto" src="/logo/transparent.png" alt="VolunteerQuest Logo" />
              VolunteerQuest
            </div>
          </Link>
          <div className="flex space-x-4">
            <Link href="/quests">
              <div className={isActive('/quests') ? 'text-primary hover:text-primary-dark' : 'text-white hover:text-gray-400'}>
                Quests
              </div>
            </Link>
            <Link href="/story">
              <div className={isActive('/story') ? 'text-primary hover:text-primary-dark' : 'text-white hover:text-gray-400'}>
                Story
              </div>
            </Link>
            <Link href="/rewards">
              <div className={isActive('/rewards') ? 'text-primary hover:text-primary-dark' : 'text-white hover:text-gray-400'}>
                Rewards
              </div>
            </Link>
            <Link href="/profile">
              <div className={isActive('/profile') ? 'text-primary hover:text-primary-dark' : 'text-white hover:text-gray-400'}>
                Profile
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <div>
        {children}
      </div>
    </>
  );
}