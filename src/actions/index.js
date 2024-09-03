"use server"

import connectToDB from "@/database"
import Blog from "@/models/blog"
import { revalidatePath } from "next/cache"

//add post action
export async function AddNewPostAction(formData,pathToRevalidate){
 await connectToDB()
 try{
    const createdPost = await Blog.create(formData)
    if(createdPost){
        revalidatePath(pathToRevalidate)
        return(
            {
                success:true,
                message:"post added"
            }
        )
    }else{
        return(
            {
                success:false,
                message:"post not added"
            }
        )
    }

 }catch(e){
    console.log(e)
    return(
        {
            success:false,
            message:"couldnt add post to db"
        }
    )
 }


}


//fetch all post action
export async function FetchAllPostsAction(id){
    await connectToDB()
    try{
        const data = await Blog.find({})

        if(data){
        return JSON.parse(JSON.stringify(data))
                
        }else{
            console.log(e)
        }

    }catch(e){
        console.log(e)
            return(
                {
                    success:false,
                    message:"couldnt add post to db"
                }
            )
    }

}

//fetch your post action
export async function FetchYourPostsAction(id){
    await connectToDB()
    try{
        const data = await Blog.find({user_id:id})

        if(data){
        return JSON.parse(JSON.stringify(data))
                
        }else{
            console.log(e)
        }

    }catch(e){
        console.log(e)
            return(
                {
                    success:false,
                    message:"couldnt add post to db"
                }
            )
    }

}

//edit post action
export async function EditPostAction(post_id,formData,pathToRevalidate){
    await connectToDB();
    try{    
        const{title,description}=formData
            const editedPost = await Blog.findByIdAndUpdate({_id:post_id},{title,description},{new:true})

            if(editedPost){
                revalidatePath(pathToRevalidate)
                return(
                    {
                        success:true,
                        message:"edited success"
                    }
                )
            }else{
                return(
                    {
                        success:false,
                        message:"edited failed"
                    }
                )
            }


    }catch(e){
        console.log(e)
        return(
            {
                success:false,
                message:"didnt delete"
            }
        )
    }
}









//delete post action
export async function DeletePostAction(post_id,revalidatePath){
    await connectToDB()
    try{
        const deletedPost = await Blog.findByIdAndDelete(post_id)
        if(deletedPost){
            revalidatePath(pathToRevalidate)

            return(
                {
                    success:true,
                    message:"post deleted",
                }
            )
        }else{
            return(
                {
                    success:false,
                    message:"didnt delete"
                }
            )
        }
    }catch(e){
        console.log(e)
        return(
            {
                success:false,
                message:"didnt delete"
            }
        )
    }
}