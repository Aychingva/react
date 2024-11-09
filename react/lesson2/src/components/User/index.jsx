import { Description } from "../Description"
import { Experience } from "../Experience"
import { Username } from "../Username"

function User({fullname,desc,experience}){
    return <div className='user-card'>
      <Username name={fullname}/>
     <Description desc={desc}/>
     <Experience experience={experience}/>
      
  
      
    </div>
  }
  
export default User