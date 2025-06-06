"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function CreatePostWizard() {
  const { user } = useUser();

  if (!user) return null;

  return (
    <div className="flex w-full gap-3 border-b border-slate-400 p-8">
      <Image
        className="h-14 w-14 rounded-full"
        src={user.imageUrl}
        alt="Profile Picture"
        width={56}
        height={56}
      />
      <input
        type="text"
        placeholder="Send some emojis..."
        className="grow bg-transparent outline-none"
      />
    </div>
  );
}
