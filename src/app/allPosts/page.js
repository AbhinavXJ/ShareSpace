import { FetchAllPostsAction } from "@/actions"
import PostsShow from "@/components/PostsShow"

async function AllPosts(){

    const postList = await FetchAllPostsAction()
    console.log(postList)

    return(
        <div>
        {/* <AddNewJournal user={JSON.parse(JSON.stringify(user))}></AddNewJournal> */}

       <div className="min-h-screen  bg-gradient-to-r from-blue-500 to-purple-600">
        <PostsShow postList={postList}></PostsShow>
       </div>
       </div>
    )
}
export default AllPosts