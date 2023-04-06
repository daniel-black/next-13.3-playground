import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-full flex justify-center items-center">
      <section className="p-10 rounded-lg border border-rose-300 bg-rose-200 w-fit space-y-3">
        <h2 className="text-3xl font-semibold text-rose-900">Page Not Found {':('}</h2>
        <p className="text-rose-700">Could not find requested resource</p>
        {/* This doesn't seem to work 🤔 */}
        <Link href='/' className="block w-full text-center py-2 rounded bg-zinc-100 shadow">Return Home</Link>
      </section>
    </div>
  );
}