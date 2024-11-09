import { user } from "../../data";
import { Usercard } from "../usercards";

 export function User({val1}){
    return(
        <div className="users">
            {
                user.filter(item=>item.title&&item.title.toLowerCase().includes(val1.toLowerCase()))
                .sort((a, b) => a.views - b.views) 
                .map(item=><Usercard key={item.id} {...item}/>)
            }
        </div>
    )
}