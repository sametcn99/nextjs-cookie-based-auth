"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Messages from "../app/login/messages";

const LoginForm = () => {
  //  Import useState and useRouter
  const [password, setPassword] = useState("");
  const [inputColor, setInputColor] = useState("");

  // Call useRouter to get the router object
  const router = useRouter();

  // Create a function that will handle the form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send the password to the API route
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    // If the response is not ok, throw an error
    const json = await res.json();
    //if (!res.ok) throw Error(json.message || 'Something happened')
    if (!res.ok) {
      // if the response is not ok, change input color to red
      // and show an error message
      setInputColor("border-red-500");
      setPassword("");
      throw Error(json.message || "Something happened");
    }
    // Redirect the user to the homepage
    router.push("/");
    router.refresh();
  };

  return (
    <>
      <form
        className="flex flex-col flex-1 gap-2 justify-center w-full"
        onSubmit={handleSubmit}
      >
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className={`py-2 px-4 mb-6 rounded-md border bg-inherit ${inputColor}`}
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
    </>
  );
};

export default LoginForm;
