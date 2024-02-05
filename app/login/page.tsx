import { redirect } from "next/navigation";
import verifyAuth from "@/lib/is-auth";
import LoginForm from "../../components/login-form";

export default async function LoginPage() {
  // Check if the user is authenticated
  const user = await verifyAuth();
  // If the user is authenticated, redirect them to the home page
  if (user) {
    redirect("/");
  }
  return (
    <main className="flex justify-center items-center">
      <div className="flex flex-col flex-1 gap-2 justify-center items-center px-8 w-screen h-screen sm:max-w-md">
        <LoginForm />
      </div>
    </main>
  );
}
