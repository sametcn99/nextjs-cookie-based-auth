import { jwtVerify } from "jose";

// Get JWT secret key from environment variable
export function getJwtSecretKey() {
  const secret = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;

  // Throw an error if the secret key is not set
  if (!secret) {
    throw new Error("JWT Secret key is not matched");
  }

  // Encode the secret key to `Uint8Array`
  return new TextEncoder().encode(secret);
}

// Verify JWT token
export async function verifyJwtToken(token: string | Uint8Array) {
  try {
    const { payload } = await jwtVerify(token, getJwtSecretKey());

    return payload;
  } catch (error) {
    return null;
  }
}
