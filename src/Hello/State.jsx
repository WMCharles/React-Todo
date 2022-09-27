import React, { useState } from 'react'

export default function State() {
    const [isOn, setIsOn] = useState(true)
    const [username, setUsername] = useState([])

    function handleClick(event){
        event.preventDefault()
        setIsOn((isOn) => !isOn)
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log("Hello!")
        const newName = {
            name: username
        }

        const newUsers = [...username, newName]

        setUsername(newUsers)
    }

    console.log(username)

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" id="name" onChange={(e) => setUsername(e.target.value)}/>
            <button type="submit" onClick={handleClick}>{isOn ? "Submit" : "Sending..."}</button>
        </form>
    )
}
