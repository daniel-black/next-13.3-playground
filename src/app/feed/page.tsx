import PostListItem, { Post } from "@/components/post-list-item";

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
  });

  return res.json();
}

export default async function FeedPage() {
  const posts = await getPosts() as Post[];
  
  return (
    <div className="py-10">
      <ul className="space-y-5 flex flex-col items-center">
        {posts.map(post => (
          <PostListItem key={post.id} {...post} />
        ))}
      </ul>
    </div>
  );
}