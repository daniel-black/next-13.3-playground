export default function LoadingPostComments() {
  return (
    <ul className="space-y-3 animate-pulse">
      <div className="p-5 rounded-lg border border-zinc-300 space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-zinc-300" />
          <div className="rounded h-5 w-20 bg-zinc-300" />
        </div>
        <div className="rounded h-7 w-44 bg-zinc-300" />
        <div className="rounded h-6 w-[100%] bg-zinc-300" />
        <div className="rounded h-6 w-[100%] bg-zinc-300" />
        <div className="rounded h-6 w-[70%] bg-zinc-300" />
      </div>

      <div className="p-5 rounded-lg border border-zinc-300 space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-zinc-300" />
          <div className="rounded h-5 w-32 bg-zinc-300" />
        </div>
        <div className="rounded h-7 w-52 bg-zinc-300" />
        <div className="rounded h-6 w-[90%] bg-zinc-300" />
        <div className="rounded h-6 w-[100%] bg-zinc-300" />
        <div className="rounded h-6 w-[50%] bg-zinc-300" />
      </div>

      <div className="p-5 rounded-lg border border-zinc-300 space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-zinc-300" />
          <div className="rounded h-5 w-28 bg-zinc-300" />
        </div>
        <div className="rounded h-7 w-36 bg-zinc-300" />
        <div className="rounded h-6 w-[100%] bg-zinc-300" />
        <div className="rounded h-6 w-[90%] bg-zinc-300" />
        <div className="rounded h-6 w-[35%] bg-zinc-300" />
      </div>
    </ul>
  );
}