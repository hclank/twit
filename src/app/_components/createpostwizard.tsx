"use client";
import { useUser } from "@clerk/nextjs";

export default function CreatePostWizard() {
  const { user } = useUser();

  console.log(user);

  if (!user) return null;

  return (
    <div className="flex w-full gap-3 border-b border-slate-400 p-8">
      <img
        className="h-14 w-14 rounded-full"
        src={user.imageUrl}
        alt="Profile Picture"
      />
      <input
        type="text"
        placeholder="Send some emojis..."
        className="grow bg-transparent outline-none"
      />
    </div>
  );
}
