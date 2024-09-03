import { FetchYourPostsAction } from "@/actions"
import AddNewJournal from "@/components/AddNewJournal"
import PostsShow from "@/components/PostsShow"
import { currentUser } from "@clerk/nextjs/server"

async function YourPosts(){
    const user = await currentUser()
    
    const postList = await FetchYourPostsAction(user?.id)
    console.log("post listssss")
    console.log(postList)

    return(
        <div>
        <AddNewJournal user={JSON.parse(JSON.stringify(user))}></AddNewJournal>

       <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
        <PostsShow postList={postList} ></PostsShow>
       </div>
       </div>
    )
}
export default YourPosts