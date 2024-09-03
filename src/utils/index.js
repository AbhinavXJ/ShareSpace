
export const AddNewPostFormControls = [
    {
        name:"title",
        label:"Title",
        placeholder:"Title of your post",
        type:String,
    
    },
    {
        name:"description",
        label:"Description",
        placeholder:"Description of your post",
        type:String,

    
    }
    
]

export const AddNewPostInitialState = 
    {   user_id:"",
        title:"",
        description:"",
        date:new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getFullYear(),

    }
    // new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getFullYear()