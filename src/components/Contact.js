import { useState } from "react"

const Contact = () => {

    const [data,setData] = useState(
        {
            name:'',
            email:'',
            message:''
        }
    )
    const handleChange = (e) => {
        const { name, value} = e.target
        setData({
            ...data,
            [name]:value
        })
    
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
       

        <div className="main-container">
<div className="contact-container">
    <form  onSubmit={handleSubmit} className="form">
        <h1 className="contact-heading"> Contact Us</h1>
        <div className="email-container">
            <label for="name">Name:</label>
            <input type="text" id="name" className="emailinput" name='name' value={data.name} onChange={handleChange}/>
        </div>
        <div className="email-container">
            <label for="email">E-mail:</label>
            <input type="email" id="name" className="emailinput"   name='email' value={data.email} onChange={handleChange} />
        </div>
        <div className="email-container">
            <label for="message">Message:</label>
            <textarea id="message" className="emailinput1"  name='message' value={data.message} onChange={handleChange}/>
        </div>
        <button type="submit" className="button">Submit</button>
       

    </form>
    <div>
        <img className="img-size" src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=826&t=st=1716808765~exp=1716809365~hmac=a657345e1607e98950f268102b7e290f310def3720076698696d70338ccb61a5"  />
    </div>

    
</div>
</div>
      );
  

}
export default Contact