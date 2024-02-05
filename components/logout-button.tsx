export default function LogoutButton() {
  return (
    <form action="/api/logout" method="post">
      <button
        className="p-1 w-full text-xl text-center uppercase rounded-md bg-slate-500 font-thin"
        formAction="/api/logout"
      >
        Logout
      </button>
    </form>
  );
}
