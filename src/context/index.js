'use client'
import { AddNewPostInitialState } from "@/utils";
import { createContext, useState } from 'react';

export const UserContext = createContext(null) 

function UserState({children}) {
    const [editedID,setEditedID] = useState(null)

    const [openPopUp,setOpenPopUp] = useState(false)
    const [newPostFormData,setNewPostFormData] = useState(AddNewPostInitialState)
    // newPostFormData["user_id"]=user?.id
    // newPostFormData["date"]= new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getFullYear()



    return ( 
        <UserContext.Provider value={{editedID,setEditedID,openPopUp,setOpenPopUp,newPostFormData,setNewPostFormData}}>
            {children}
        </UserContext.Provider>
     );
}

export default UserState;