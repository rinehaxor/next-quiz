import SignInButton from '@/components/SignInButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { prisma } from '@/lib/db';
import { getAuthSession } from '@/lib/nextauth';
import { redirect } from 'next/navigation';
export default async function Home() {
   const session = await getAuthSession();
   if (session?.user) {
      //that user is logged in
      return redirect('/dashboard');
   }
   return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
         <Card className="w-[300px]">
            <CardHeader>
               <CardTitle>Welcome to Next Quis</CardTitle>
               <CardDescription>Next Quiz is a fun and engaging way to learn new things. With a variety of quizzes to choose from, you can test your knowledge on a wide range of topics.</CardDescription>
            </CardHeader>
            <CardContent>
               <SignInButton text="Sign in With Google" />
            </CardContent>
         </Card>
      </div>
   );
}
