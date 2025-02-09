"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import { joinGuild } from "@/lib/guilds";

export default function JoinGuild() {
  const params = useParams();

  useEffect(() => {
    if (params.id)
      console.log(params.id)
      joinGuild(params.id as string).then(() => {
        window.location.href = '/quests';
      });
  }, [params]);

  return <div>Joining guild...</div>;
}
