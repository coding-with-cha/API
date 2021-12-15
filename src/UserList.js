import React, { useState, useEffect } from 'react'
import axios from "axios"

const UserList = () => {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{setUsers(res.data)})
    }, []);
    return (
        <div>
            {users.map(user=>(
                <div key={user.id} className='block'>
                    <h1><span>User Name:</span> {user.username}</h1>
                    <h1><span>Address:</span> {user.address.street}{user.address.suite}{user.address.zipcode}{user.address.city}</h1>
                    <h1><span>Company:</span> {user.company.name}</h1>
                </div>
            ))}
        </div>
    )
}

export default UserList
