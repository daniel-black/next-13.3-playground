import LoadingPostComments from "@/components/loading-post-comments";
import PostComments from "@/components/post-comments";
import { Post } from "@/components/post-list-item";
import { Suspense } from "react";

type PostPageProps = {
  params: { id: number };
}

async function getPostData(postId: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'GET'
  });

  return res.json();
}

export default async function PostPage({ params: { id } }: PostPageProps) {
  const post = await getPostData(id) as Post;

  return (
    <div className="flex flex-col items-center space-y-10 py-10">
      <div className="p-5 rounded border border-zinc-400 bg-zinc-300 space-y-3 max-w-lg">
        <h1 className="text-3xl first-letter:capitalize">{post.title}</h1>
        <p>{post.body}</p>
        <p className="text-sm">by user #{post.userId}</p>
      </div>
      
      <div className="w-full max-w-lg">
        <h2>Comments:</h2>
        <Suspense fallback={<LoadingPostComments />}>
          {/* @ts-expect-error Server Component */}
          <PostComments postId={id} />
        </Suspense>
      </div>
    </div>
  );
}