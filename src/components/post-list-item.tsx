import Link from "next/link";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function PostListItem(props: Post) {
  return (
    <div className="p-5 rounded border border-zinc-400 bg-zinc-300 space-y-3 max-w-lg">
      <div className="flex justify-between items-baseline">
        <Link href={`/post/${props.id}`} className="text-zinc-800 text-lg capitalize">{props.title}</Link>
        <span className="text-sm text-zinc-600">(User #{props.userId})</span>
      </div>
      <p className="first-letter:capitalize">{props.body}</p>
    </div>
  );
}