import { AlignJustify } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import { SignOutButton, UserButton } from "@clerk/nextjs";






function Header({user}) {
    console.log("huhu")
    console.log(!user)

    const menuItems = [
        {
            label:"Home",
            path:"/",
            show:true,
        },
        {
            label:"sign-in",
            path:"/sign-in",
            show:!user,
        },
        {
            label:"sign-up",
            path:"/sign-up",
            show:!user,
        },
        {
            label:"All Posts",
            path:"/allPosts",
            show:true,
            
        },
        {
            label:"Your Posts",
            path:"/yourPosts",
            show:user,
            
        }
    
    
    
    ]
    
    
    return ( 
       <header>
        <Sheet>
            <SheetTrigger asChild>
                    <Button className="lg:hidden">
                        <AlignJustify className="h-6 w-6"></AlignJustify>
                    </Button>
            </SheetTrigger>
            <SheetContent side="left" className="">
                <div className="flex flex-col gap-6" >
                {
                    menuItems.map((item)=>{
                        if(item.show){
                            return (
                                <Link href={item.path} className="font-bold">{item.label}</Link>
                                )
                        }else{
                            return null
                        }
                        
                    })
                }
                <UserButton afterSignOutUrl="/"></UserButton>
                </div>

            </SheetContent>
        </Sheet>
        <div className="hidden lg:flex justify-between py-4">
            <Link href="/" className="hidden lg:flex mr-6 font-bold">ShareSpace</Link>
            <div className="hidden lg:flex justify-end gap-6">
            {
                menuItems.map((item)=>{
                    if(item.show){

                    
                    return(
                        <Link href={item.path} className="font-bold">{item.label}</Link>
                    )
                    }else{
                        return null
                    }
                })
            }
                <UserButton afterSignOutUrl="/"></UserButton>

            </div>
        </div>
       </header> 


     );
}

export default Header;