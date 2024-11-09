import React from 'react'
import "./style.css"

function Table({users,setUsers,setSelectedUser}) {


    const deleteuser=(id)=>{
        setUsers(users.filter(user=>user.id!==id))

    }

    const editUser = (user) => {
        setSelectedUser(user);
    };
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>FULLNAME</th>
                    <th>EMAIL</th>
                    <th>PASSWORD</th>
                    <th>Actions</th>
                    
                </tr>
            </thead>
            <tbody>
                {

                    users.map(user=><tr>
                        <td>{user.id}</td>
                        <td>
                            {user.fullname}
                            
                        </td>
                        <td>
                            {user.email}
                            {/* <input type="text" value={user.email}/> */}
                        </td>
                        <td>
                            
                                {user.pass}
                           
                            
                            {/* <input type="text" value={user.pass}/> */}
                        </td>
                        <td>
                            <button onClick={()=>deleteuser(user.id)}>delete</button>
                            <button onClick={()=>editUser(user)}>update</button>
                        </td>
                    </tr>
                        
                    )
                }
                
            </tbody>
            
            

        </table>
    </div>
  )
}

export default Table