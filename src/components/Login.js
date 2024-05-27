import { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')

    const [errors,setErrors] = useState({
        email: "",
        password:""
 } )

    function onSubmit() {
        if (email.trim() === "") {
            setErrors( (errors) => ({...errors,email:"Enter E-mail Address"}))

        }
        else {
            setErrors((errors) => ({...errors,email:""}))
        }
        if (password.trim() === "") {
            setErrors( (errors) => (
                {...errors,password:"Enter your valid password"}
            ))
        }

        else {
            setErrors((errors) =>({...errors,password:""}))
        }

       

    }
    return (


        < div className = "conatiner" >
            <div className="sub-container">
                <h1 className="heading"> LOGIN FORM</h1>

                <div className="email-container">

                    <label for="email">Email</label>
                    <input type="email" id="email" className="emailinput" placeholder="Enter E-mail"  value={email} 
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}/>

                    {errors.email && <span className="text-danger">{errors.email}</span> }
                </div>

                <div className="email-container">
                    <label for="password">Password</label>
                    <input type="password" id="password" className="emailinput" placeholder="Enter Password"  value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}/>

                    {errors.password && <span className="text-danger">{errors.password}</span>}
                </div>

                <button className="button" onClick={onSubmit}>Login</button>


            </div>

        </div >
    )


}
export default Login