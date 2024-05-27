
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <nav className="head-container">
      <h1 className="header-heading">Laya</h1>

      <ul className="uorder-tems">
        <li><Link  className="list-items" to='/'>Home</Link></li>
        <li><Link  className="list-items" to='about'>About</Link></li>
        <li><Link  className="list-items" to='contact'>Contact</Link></li>
        <li><Link   className="list-items"to='login'>Login</Link></li>
      </ul>

    </nav>
  )
}
export default Header