import PostCard from "../PostCard";

function PostsShow({postList}) {
    return ( 
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 mx-5">
                {
                    postList.map((currentPost)=>{
                        return(
                            <PostCard  post={currentPost}></PostCard>


                        )





                    })




                }
        </div>
     );
}

export default PostsShow;