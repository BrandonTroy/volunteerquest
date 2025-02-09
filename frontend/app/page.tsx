import "./globals.css";

export default function SplashPage() {
  return (
    <main>
      <div className="background flex flex-col items-center justify-center">
        <div className="bg-black bg-opacity-50 w-fit p-10 rounded-xl">
          <div className="flex flex-row gap-5 justify-center">
            <img className="h-20 w-auto" src="/logo/transparent.png" alt="VolunteerQuest Logo" />
            <h1 className="text-center font-bold tracking-wide text-2xl my-auto">VolunteerQuest</h1>
          </div>
          <div className="my-5 sm:mx-auto sm:w-full text-center text-base">
            Project description goes here. This is a placeholder for the project description.
          </div>
          <div className="flex flex-row gap-5 justify-center">
            <a href="/login" className="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">Continue Path</a>
            <a href="/signup" className="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">Start Path</a>
          </div>
        </div>
      </div>
    </main>
  );
}