import verifyAuth from "@/app/libs/verify-auth";
import AdminComponent from "./components/admin-componnent";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  return <>{(await verifyAuth()) ? <AdminComponent /> : redirect("/login")}</>;
}
