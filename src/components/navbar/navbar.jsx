import { NavbarContainer, NavbarItems } from "./navbar.styles";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<NavbarContainer>
			<NavbarItems>
				<p><NavLink to="/projects">Projetos</NavLink></p>
				<p><a href="#why">Peça o seu</a></p>
				<p><a href="#how">Como funciona</a></p>
			</NavbarItems>
		</NavbarContainer>
	);
};

export default Navbar;
