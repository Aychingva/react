
import React, { useState, useEffect } from 'react';
import "./style.css"
import { uid } from 'uid';
 function Form({users,setUsers,selectedUser, setSelectedUser }) {


    const[formData,setformData]=useState({
        id:uid(),
        fullname:"",
        email:"",
        pass:""
    })

     
    useEffect(() => {
        if (selectedUser) {
            setformData(selectedUser); 
        } 
       
    }, [selectedUser]);

    console.log(users)
    const userCreate=(e)=>{
        e.preventDefault()
        if (selectedUser) {
           
            setUsers(users.map(user => 
                user.id === selectedUser.id ? formData : user
            ));
            setSelectedUser(null);
        } else {
            
            setUsers([...users, formData]);
        }
       
        setformData({
            id:uid(),
            fullname:"",
            email:"",
            pass:""
            
        })
        

    }
  return (
    <div>
        <form onSubmit={userCreate}>
            <input type="text" placeholder='fullname' 
            onChange={(e)=>setformData({
                ...formData,
                fullname:e.target.value

            })}
            value={formData.fullname}
            />
           
           <br></br>
            <input type="text" placeholder='email'

            onChange={(e)=>setformData({
                ...formData,
                email:e.target.value

            })}
            value={formData.email}

            />
            


           
            <br></br>
            <input type="text" placeholder='password'
             onChange={(e)=>setformData({
                ...formData,
                pass:e.target.value

            })}
            value={formData.pass}
            />
            
            <br></br>
            <input type="submit" value={selectedUser ? "Update" : "Create"}/>
            
        </form>
    </div>
  )
}

export default Form