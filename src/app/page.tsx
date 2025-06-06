import { api } from "~/trpc/server";

export default async function Home() {
  const posts = await api.post.getAll();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div>{posts?.map((post) => <div key={post.id}>{post.content}</div>)}</div>
    </main>
  );
}
