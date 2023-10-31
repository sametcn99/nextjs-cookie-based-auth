import { redirect } from 'next/navigation';

import verifyAuth from '@/app/libs/verify-auth';
import LoginForm from './components/login-form';

export const revalidate = 0;

export default async function LoginPage() {

  const user = await verifyAuth();

  if (user) {
    redirect('/');
  }

  return (
    <main className="flex justify-center items-center">
      <div className="flex flex-col flex-1 gap-2 justify-center items-center px-8 w-screen h-screen sm:max-w-md">
          <LoginForm />
      </div>
    </main>
  );
}
