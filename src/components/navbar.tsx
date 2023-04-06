import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-3 px-6 bg-zinc-100 text-zinc-600 shadow-sm">
      <Link href='/'>Home</Link>
      <div className="space-x-6">
        <Link href='/feed' className="px-2 py-1 rounded-lg hover:bg-zinc-50 hover:shadow-sm transition-all duration-75">Feed</Link>
        <Link href='/users' className="px-2 py-1 rounded-lg hover:bg-zinc-50 hover:shadow-sm transition-all duration-75">Users</Link>
      </div>
    </nav>
  );
}