import { currentUser } from "@clerk/nextjs/server";
import Header from "../Header";
import { redirect } from "next/navigation";
import UserState from "@/context";

async function CommonLayout({children}) {
    const user = await currentUser();
    

    return ( 
        <UserState>
        <div>
    {/*  header  */}
<Header user={JSON.parse(JSON.stringify(user))}></Header>
    {/*  header  */}

    {/*  body  */}
    <main>{children}</main>

    {/*  body  */}


        </div>



        </UserState>

     );
}

export default CommonLayout;