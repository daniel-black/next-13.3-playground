import PostComment, { Comment } from "./post-comment";

type PostCommentsProps = {
  postId: number;
};

async function getAllPostComments(postId: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`, {
    method: 'GET'
  });

  return res.json();
}

export default async function PostComments({ postId }: PostCommentsProps) {
  const comments = await getAllPostComments(postId) as Comment[];
  
  return (
    <ul className="space-y-3">
      {comments.map(comment => (
        <PostComment key={comment.id} {...comment} />
      ))}
    </ul>
  );
}