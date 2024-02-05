import Link from "next/link";
import AuthButton from "@/components/auth-button";

export default async function Home() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center py-2 min-h-screen">
      <h1 className="text-4xl font-bold">Home Page</h1>
      <AuthButton />
      <Link
        className="p-1 w-full text-xl font-thin text-center uppercase rounded-md bg-slate-500"
        href="/admin"
      >
        Admin
      </Link>
      <a
        href="https://sametcc.me/nextjs-cookie-based-auth"
        target="_blank"
        className="p-2 mt-4 font-bold text-black rounded-md hover:scale-105 bg-slate-300"
        rel="noreferrer"
      >
        Check out Source from Github
      </a>
      <h2>
        Admin Key In Demo: <span className="select-text">o8AKFDIlUQ</span>
      </h2>
    </div>
  );
}
