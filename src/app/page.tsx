import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div>
        <p>{hello ? hello.greeting : "Loading tRPC query..."}</p>
      </div>
    </main>
  );
}
