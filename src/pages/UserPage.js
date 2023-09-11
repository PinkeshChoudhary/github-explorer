import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Users } from '../MyComponents/usersdata/Users'
import { UsersList } from '../styled'

export const UserPage = () => {
    const[users, setUsers] = useState([])
    const[loading, setLoading] = useState(false)

    useEffect(() => {
                setLoading(true)
                async function usersdata() {
                    console.log("Call")
                    await axios.get('https://api.github.com/users')
                    .then((res) => {
                        setUsers(res.data)
                    })
                    setLoading(false)
                }
        usersdata()
    }, []  )

    
  return (
    <>
    <h3  style={{marginLeft:'7rem',fontSize:'22px', fontWeight: '400'}}>Github Users</h3>
    <UsersList>
        <Users users = {users}/>
    </UsersList>
    </>
  )
}
