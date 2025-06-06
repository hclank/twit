import { api } from "~/trpc/server";
import CreatePostWizard from "~/app/_components/createpostwizard";

export default async function Home() {
  const posts = await api.post.getAll();

  if (!posts) return <div>Loading...</div>;

  return (
    <main className="flex h-screen justify-center">
      <div className="h-full w-full border-x border-slate-400 md:max-w-2xl">
        <CreatePostWizard />
        <div className="flex flex-col">
          {posts.map((post) => (
            <div key={post.id} className="border-b border-slate-400 p-8">
              {post.content}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
