import React, { useState } from "react"
import toast, { Toaster } from 'react-hot-toast';
import "./Login.css"

const Login = () => {

    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const [error, setError] = useState(false)
    const [account,setAccount] = useState("admin")
    const notify = () => toast.success('Successfully toasted!')
return <div className="loginPage">

    <div className="loginBox">

        <h1>Login</h1>
        <form>
            <label>Username:</label><br/>
            <input onChange={(e) => {
                setUserName(e.target.value)
            }} type="text" name="username" required/><br/>
            <label>Password:</label><br/>
            <input onChange={(e) => {
                setPassword(e.target.value)
            }} type="password" name="password" required/><br/>
            <select onChange={(e) => {
                setAccount(e.target.value)
            }}>
                <option value="admin">Admin</option>
                <option value="user">User</option>
            </select>
            <button type="submit">Login</button>
        </form>
        <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
</div>
}

export default Login