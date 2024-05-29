import { useState } from "react"
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [username, setName] = useState('')
    const [password, setPassword] = useState('')

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();

    function onSubmit() {
        if (username.trim() === "") {
            setErrors((errors) => ({ ...errors, username: "Enter valid username" }))

        }
        else {
            setErrors((errors) => ({ ...errors, username: "" }))
        }
        if (password.trim() === "") {
            setErrors((errors) => (
                { ...errors, password: "Enter your valid password" }
            ))
        }

        else {
            setErrors((errors) => ({ ...errors, password: "" }))
        }

    }
    const onSubmitSucessApi = () => {
        navigate("/home")
    }
    const submitForm = async (e) => {
        e.preventDefault()
        const url = "https://apis.ccbp.in/login"
        const options = {
            method:"POST",
            body:JSON.stringify({
                username:username,
                password:password
            })
        }
        const response = await fetch(url,options)
        const data = await response.json()
        console.log(data)
        console.log(response)
        if (response.ok === true) {
            onSubmitSucessApi()
        }else{
            console.log("Please enter valid details")
        }

    }

    return (


        < div className="conatiner" >
            <form onSubmit={submitForm} className="sub-container">
                <h1 className="heading"> LOGIN FORM</h1>

                <div className="email-container">

                    <label for="name">User Name</label>
                    <input type="text" id="name" className="emailinput" placeholder="Enter Name" value={username}
                        onChange={(e) => {
                            setName(e.target.value)
                        }} />

                    {errors.username && <span className="text-danger">{errors.username}</span>}
                </div>

                <div className="email-container">
                    <label for="password">Password</label>
                    <input type="password" id="password" className="emailinput" placeholder="Enter Password" value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }} />

                    {errors.password && <span className="text-danger">{errors.password}</span>}
                </div>

                <button className="button" onClick={onSubmit}>Login</button>


            </form>

        </div >
    )


}
export default Login