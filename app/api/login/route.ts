import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { SignJWT } from "jose";
import { getJwtSecretKey } from "@/app/libs/get-jwt";

// Create a POST request handler
export async function POST(request: Request) {
  // Read the password from the request body
  const data = await request.json();
  const password = data.password;

  // Create a new URL object from the request url
  const requestUrl = new URL(request.url);

  // Read the admin secret from the .env.local file
  const adminSecret = process.env.NEXT_PUBLIC_ADMIN_SECRET;

  // Check that the password is correct
  try {
    if (password === adminSecret) {
      // Create a signed JWT token
      const token = await new SignJWT({
        password: password,
        role: "admin", // Set your own roles
      })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .sign(getJwtSecretKey());

      // Set a cookie with the signed JWT token
      cookies().set({
        name: "auth",
        value: token,
        secure: true,
      });

      // Redirect the user to the home page
      return NextResponse.redirect(`${requestUrl.origin}`, {
        // a 301 status is required to redirect from a POST to a GET route
        status: 301,
      });
    } else {
      // Redirect the user back to the login page if the password is incorrect
      return NextResponse.redirect(
        `${requestUrl.origin}/login?error=Could not authenticate user`,
        {
          // a 301 status is required to redirect from a POST to a GET route
          status: 301,
        },
      );
    }
  } catch (error) {
    // Redirect the user back to the login page if there was an error
    console.error("Error:", error);
    return NextResponse.redirect(
      `${requestUrl.origin}/login?error=Could not authenticate user`,
      {
        // a 301 status is required to redirect from a POST to a GET route
        status: 301,
      },
    );
  }
}
