# Next.js JWT and Cookie-Based Admin Authentication Example

This project has been created to learn how to implement JSON Web Token (JWT) and cookie-based authentication for only an administrator (admin) using [Next.js](https://nextjs.org/). The project includes a homepage that requires only users identified as administrators to log in. Users can log in using JWT tokens and cookies.

## Project Setup

To enable JWT and cookie-based authentication in this project, we use the following environment variables. You should set these environment variables in the `.env` file:

1. `NEXT_PUBLIC_ADMIN_SECRET`: A variable that contains the password used for admin login. This value is compared to create a JWT token and stored as a cookie.

2. `NEXT_PUBLIC_JWT_SECRET_KEY`: A secret key used to sign and verify JWT tokens. This key ensures the security of JWT tokens.


3. To start the project, run the following commands; `npm i` and `npm run dev`:

4. Visit `http://localhost:3000` in your web browser. The homepage will appear.

5. Click the "Log In" button on the homepage to log in as a user identified as an administrator. You should log in using the `NEXT_PUBLIC_ADMIN_SECRET` value you've set earlier.

6. After a successful login, you will be redirected to the administrator page.

## Further Information

The purpose of this project is to learn the fundamental concepts of implementing JWT and cookie-based authentication for only administrator users using Next.js. By examining the project, you can learn how to grant access to specific areas that require a certain level of authentication.

If you wish to customize the project and add more features, you can refer to the official Next.js documentation and other resources related to JWT.

##
