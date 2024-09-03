"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "../ui/button";
import { AddNewPostFormControls, AddNewPostInitialState } from "@/utils";
import { useContext, useState } from "react";
import { AddNewPostAction, EditPostAction } from "@/actions";
import { redirect } from "next/navigation";
import { UserContext } from "@/context";
function AddNewJournal({user}) {

  // const [newPostFormData,setNewPostFormData]= useState(AddNewPostInitialState);
  // const [openPopUp,setOpenPopUp]=useState(false)
  if(!user){
    redirect('/')
  }

  const{editedID,setEditedID,openPopUp,setOpenPopUp,newPostFormData,setNewPostFormData}=useContext(UserContext)
   newPostFormData["user_id"]=user?.id
    newPostFormData["date"]= new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getFullYear()



   function handleSaveButtonValid(){
    return Object.keys(newPostFormData).every((key)=>newPostFormData[key].trim()!=="")
   }



   async function handleAddPostAction(){
    console.log(newPostFormData)
    const result = editedID!==null?await EditPostAction(editedID,newPostFormData,'/yourPosts'): await AddNewPostAction(newPostFormData,'/yourPosts')
    setOpenPopUp(false)
    setEditedID(null)
    setNewPostFormData(AddNewPostInitialState)
    console.log(result)
   }


    return ( <div>

    <Button onClick={()=>setOpenPopUp(true)}   >
      Add Post
      </Button>
    
    <Dialog 
    
    open={openPopUp} 
    onOpenChange={()=>{
      setOpenPopUp(false)
      setNewPostFormData(AddNewPostInitialState)
      setEditedID(null)
    }
  }
    >
  
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
          {
      editedID!==null ? "Edit Post":"Add Post"
      

      }
          </DialogTitle>
          <DialogDescription>
            Hope you having a nice day!
            <div>
                Date:
                </div>
            <Label  htmlFor="date" className="text-center flex gap-6">
                
                <div>
              {
                new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getFullYear()
              }
              </div>
            </Label>
            
          
          </DialogDescription>
        </DialogHeader>
        <form action={handleAddPostAction}>
        <div className="grid gap-4 py-4">
            <div className="flex flex-col gap-4">
              {
                  AddNewPostFormControls?.map((item)=>{
                    return(
                      <div >
                            <Label htmlFor={item.name} className="text-right">
                              {item.label}
                            </Label>
                            <Input
                              id={item.name}
                              placeholder={item.placeholder}
                              className="col-span-3"
                              value={newPostFormData[item.name]}
                              onChange={(event)=>{
                                setNewPostFormData({
                                  ...newPostFormData,
                                  [item.name]:event.target.value,
                                })
                              }}

                              
                            />
                      </div>
                    )
                    
                  })
                
                }
            </div>
        </div>  
            
           
          
        <DialogFooter>
          <Button  className="disabled:opacity-65" type="submit" disabled={!handleSaveButtonValid()}>
          {
      editedID!==null ? "Save Changes":"Add Post"
      

      }
          </Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
 </div> );
}

export default AddNewJournal;