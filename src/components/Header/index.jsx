import { NavLink } from 'react-router-dom'
import logo from '../../assets/LOGO.svg'
import './header.css'

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo Kasa" />
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeclassname="active">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/a-propos" activeclassname="active">
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
