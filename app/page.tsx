import verifyAuth from "./libs/verify-auth";
import Link from "next/link";
import LogoutButton from "./components/logout-button";

export default async function Home() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center py-2 min-h-screen">
      <h1 className="text-4xl font-bold">Home Page</h1>
      {(await verifyAuth()) ? (
        <div className="flex flex-col gap-3 w-full text-center lowercase">
          <p className="lowercase">Logged</p>
          <LogoutButton />
        </div>
      ) : (
        <>
          <p className="lowercase">Not logged</p>
          <Link
            href="/login"
            className="p-1 w-full text-xl font-thin text-center uppercase rounded-md bg-slate-500"
          >
            Login
          </Link>
        </>
      )}
      <Link
        className="p-1 w-full text-xl font-thin text-center uppercase rounded-md bg-slate-500"
        href="/admin"
      >
        Admin
      </Link>
      <a
        href="https://github.com/sametcn99/nextjs-cookie-based-auth"
        target="_blank"
        className="p-2 mt-4 font-bold text-black rounded-md hover:scale-105 bg-slate-300"
        rel="noreferrer"
      >
        Check out Source from Github
      </a>
    </div>
  );
}
