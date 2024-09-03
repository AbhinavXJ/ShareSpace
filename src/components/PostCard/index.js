"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "../ui/button";
import { DeletePostAction, EditUserAction } from "@/actions";
import { revalidatePath } from "next/cache";
import { useContext } from "react";
import { UserContext } from "@/context";
import { usePathname } from "next/navigation";
  


function PostCard({post}) {

    // async function handleDeletePost(post_id){
    //     await DeletePostAction(post_id)

    // }

    const{openPopUp,setEditedID,setOpenPopUp,newPostFormData,setNewPostFormData}=useContext(UserContext)


    async function handleEditAction(post){
        setOpenPopUp(true)

        setNewPostFormData({
            ...newPostFormData,
            title:post?.title,
            description:post?.description,
           

        }
            


       
        )
        console.log("jaijdsiajs")

        console.log(post?._id)
        setEditedID(post?._id)
       
    }

    console.log("post")
    console.log(post)
    const pathname = usePathname()
    console.log("sjahdnfaudfbdsuhfjn")

    console.log(pathname)
    return (
            <Card className="mt-5">
            <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent className="break-words	">
                {post.description}
            </CardContent>
            {
                pathname=='/yourPosts' ?
            <CardFooter className="flex justify-around">
                
               

                <Button onClick={()=>DeletePostAction(post?._id,'/yourPosts')}>Delete</Button>
                <Button onClick={()=>handleEditAction(post)}>Edit</Button>
                  

            </CardFooter>
            :null    
            }
            </Card>


     );
}

export default PostCard;