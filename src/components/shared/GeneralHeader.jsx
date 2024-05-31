import { Link } from "react-router-dom"
import './GeneralHeader.css'


const GeneralHeader = () => {
  return (
    <header className="header">
        <h1 className="header_logo"><Link to='/'> HotelsApp</Link></h1>
        <nav className="header_nav">
            <ul className="header_ul">
                <li>
                     <Link to='/reservation'>Reservations</Link>
                </li>
                <li>
                     <Link to='/register'>Register</Link>
                </li>
                <li>
                     <Link to='/login'>Login</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default GeneralHeader