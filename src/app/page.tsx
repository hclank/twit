import { api } from "~/trpc/server";
import CreatePostWizard from "~/app/_components/createpostwizard";
import type { RouterOutputs } from "~/trpc/react";

type PostWithUser = RouterOutputs["post"]["getAll"][number];
const PostView = (props: PostWithUser) => {
  const { post, author } = props;
  return (
    <div
      key={post.id}
      className="flex items-center gap-3 border-b border-slate-400 p-4"
    >
      <img
        className="h-12 w-12 rounded-full"
        src={author.imageUrl}
        alt="Profile Picture"
      />
      <div className="flex flex-col">
        <div className="flex">
          <span className="font-bold text-slate-300">{`@${author.username!}`}</span>
          <span className="mx-2 text-slate-300">·</span>
          <span className="text-slate-300">1 hour ago</span>
        </div>
        <span>{post.content}</span>
      </div>
    </div>
  );
};

export default async function Home() {
  const posts = await api.post.getAll();

  if (!posts) return <div>Loading...</div>;

  return (
    <main className="flex h-screen justify-center">
      <div className="h-full w-full border-x border-slate-400 md:max-w-2xl">
        <CreatePostWizard />
        <div className="flex flex-col">
          {posts.map((fullPost) => (
            <PostView {...fullPost} key={fullPost.post.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
