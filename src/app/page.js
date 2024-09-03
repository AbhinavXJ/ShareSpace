import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {

  const user = await currentUser();
  console.log(user)



  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600">
        
        
        <div className="Container mx-auto flex flex-col justify-center items-center">
          <h2 className="text-4xl text-white font-bold">Welcome to ShareSpace</h2>


          <Link href="/allPosts" className="my-14">
            <Button>
            Browse All Posts
            </Button>
            </Link>

            <h2 className="text-4xl text-white font-bold">Sign up to add your personal posts</h2>

           
         


        </div>
    </div>
  );
}
