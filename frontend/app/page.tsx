"use client";

import "./globals.css";
import { getUser } from "@/lib/user";
import { useEffect, useState } from "react";

function SplashPage() {
  return (
    <main>
      <div className="background flex flex-col items-center justify-center">
        <div className="bg-black bg-opacity-65 w-fit p-10 rounded-xl">
          <div className="flex flex-row gap-5 justify-center">
            <img className="h-20 w-auto" src="/logo/transparent.png" alt="VolunteerQuest Logo" />
            <h1 className="text-center font-bold tracking-wide text-2xl my-auto">VolunteerQuest</h1>
          </div>
          <div className="mt-5 text-center max-w-[50rem]">
            Join VolunteerQuest, the ultimate platform that transforms volunteering into an exciting adventure!
            Sign up, choose from a variety of "quests" (volunteering events) posted by organizations,
            and team up with fellow volunteers to make a difference. Earn points for every quest you complete,
            unlock achievements, and redeem rewards as you level up your impact.
            Whether you're passionate about helping your community, meeting like-minded people,
            or just love a good challenge, VolunteerQuest makes giving back more engaging and rewarding than ever.
          </div>
          <div className="flex flex-row gap-5 mt-10 justify-center">
            <a href="/signup" className="text-white bg-primary hover:bg-primary-dark focus:outline-white font-medium rounded-lg text-sm px-5 py-2.5">Sign Up</a>
            <a href="/login" className="text-white bg-background-accent hover:bg-background-light focus:outline-white font-medium rounded-lg text-sm px-5 py-2.5">Log In</a>
          </div>
        </div>
      </div>
    </main>
  );
}

function Home() {
  return (
    <main>You are logged in lol</main>
  );
}


export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("returning") !== "true") {
      setIsLoading(false);
      return;
    }
    
    getUser().then(() => {
      setIsAuthenticated(true);
    }).catch(() => {
      setIsAuthenticated(false);
    }).finally(() => {
      setIsLoading(false);
    });
  }, []);

  return isLoading || !isAuthenticated ? <SplashPage /> : <Home />;
}