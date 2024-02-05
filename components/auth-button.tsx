import isAuth from "@/lib/is-auth";
import React from "react";
import LogoutButton from "./logout-button";
import Link from "next/link";

export default async function AuthButton() {
  const isLogged = await isAuth();

  return (
    <>
      {isLogged ? (
        <div className="flex flex-col gap-3 w-full text-center lowercase">
          <p>Logged</p>
          <LogoutButton />
        </div>
      ) : (
        <>
          <p>Not Logged</p>
          <Link
            href="/login"
            className="p-1 w-full text-xl font-thin text-center uppercase rounded-md bg-slate-500"
          >
            Login
          </Link>
        </>
      )}
    </>
  );
}
