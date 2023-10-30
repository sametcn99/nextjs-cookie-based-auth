"use client";
import { useState } from "react";
import Messages from "./messages";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const adminPassword = process.env.NEXT_PUBLIC_ADMIN_SECRET;
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ password }), // Send the password in the request body
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main className="flex justify-center items-center">
      <div className="flex flex-col flex-1 gap-2 justify-center items-center px-8 w-screen h-screen sm:max-w-md">
        <form
          className="flex flex-col flex-1 gap-2 justify-center w-full"
          onSubmit={handleSubmit}
        >
          <label className="text-md" htmlFor="password">
            Password
          </label>
          <input
            className="py-2 px-4 mb-6 rounded-md border bg-inherit"
            type="password"
            name="password"
            placeholder=""
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="py-2 px-4 mb-2 font-thin bg-gray-800 rounded-md"
            type="submit"
          >
            Login
          </button>
        </form>
        <Messages />
      </div>
    </main>
  );
}
