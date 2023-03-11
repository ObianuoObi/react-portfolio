import { NavLink } from "react-router-dom";

function Header () {
    return (
        <header>
  <h3>LOGO</h3>
  <nav>
    <NavLink href="#">Home</NavLink>
    <Navlink href="#">Projects</Navlink>
    <Navlink href="#">Contact</Navlink>
  </nav>
</header>
    )
}

export default  Header;