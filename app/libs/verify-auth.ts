import { cookies } from "next/headers";
import { verifyJwtToken } from "./get-jwt";

// Create an async function called verifyAuth
export default async function verifyAuth() {
  // Get the auth cookie
  const cookieStore = cookies();
  const auth = cookieStore.get("auth");

  // If no auth cookie is found, return false
  if (!auth) {
    //console.log("Auth cookie not found");
    return false;
  }

  // If an auth cookie is found, verify it
  const verifiedToken = await verifyJwtToken(auth.value);

  // If the token is verified, return true
  if (verifiedToken) {
    //console.log("Auth cookie verified");
    return true;
  } else {
    // If the token is not verified, return false
    //console.log("Auth cookie not verified");
    return false;
  }
}
