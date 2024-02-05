import verifyAuth from "@/lib/is-auth";
import AdminComponent from "./components/admin-componnent";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  return <>{(await verifyAuth()) ? <AdminComponent /> : redirect("/login")}</>;
}
