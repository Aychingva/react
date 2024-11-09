import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './companents/table'
import Form from './companents/form'

function App() {

  const [users,setUsers]=useState([])
  const [selectedUser, setSelectedUser] = useState(null);
  

  return (
    <div className="container">
    
     <Form
      users={users}
      setUsers={setUsers}
      selectedUser={selectedUser} 
      setSelectedUser={setSelectedUser}
     />
     <Table
      users={users}
      setUsers={setUsers}
      selectedUser={selectedUser} 
      setSelectedUser={setSelectedUser}
     
     />
    </div>
  )
}

export default App
