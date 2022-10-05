import React, { useState } from 'react'

export default function State() {
    const [username, setUsername] = useState([])
    const [user, setUser] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        
        const newName = {
            name: user
        }

        const newUsers = [...username, newName]

        setUsername(newUsers)

        console.log(username)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" id="name" onChange={(e) => setUser(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    )
}
