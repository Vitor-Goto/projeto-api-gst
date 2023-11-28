import { Link } from "react-router-dom"

import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>
        <Link to={"/"}>Chamados</Link>
      </h2>
      <ul>
        <li>
          <Link to={"/"}>Inicio</Link>
        </li>
        <li>
          <Link to={"/new"} className="new-btn">
            Atribuir chamado
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
