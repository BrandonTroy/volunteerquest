import Link from 'next/link';

export default function Test({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">
            <Link href="/">VolunteerQuest</Link>
          </div>
          <div className="space-x-4">
            <Link href="/quests" className="text-white hover:text-gray-400">Quests</Link>
            <Link href="/path" className="text-white hover:text-gray-400">Path</Link>
            <Link href="/profile" className="text-white hover:text-gray-400">Profile</Link>
          </div>
        </div>
      </nav>
      <div>
        {children}
      </div>
    </>
  );
}