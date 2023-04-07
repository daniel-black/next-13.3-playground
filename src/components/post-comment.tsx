export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export default function PostComment(props: Comment) {
  return (
    <div className="p-5 rounded-lg border border-zinc-300 space-y-2">
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 rounded-full bg-zinc-300" />
        <p className="text-zinc-500 text-sm">{props.email}</p>
      </div>
      <p className="text-lg">{props.name}</p>
      <p>{props.body}</p>
    </div>
  );
}