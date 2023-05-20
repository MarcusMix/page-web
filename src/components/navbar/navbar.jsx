import { NavbarContainer, NavbarItems } from "./navbar.styles";
import { NavLink } from "react-router-dom";

import { HiOutlineGlobeAlt } from "react-icons/hi";

const Navbar = () => {
	return (
		<NavbarContainer>
			<h1>
				<HiOutlineGlobeAlt /> Site para sua Marca
			</h1>
			<NavbarItems>
				<p>
					<NavLink to="/projects">Projetos</NavLink>
				</p>
				<p>
					<a href="#why">Peça o seu</a>
				</p>
				<p>
					<a href="#how">Como funciona</a>
				</p>
				<p>
					<a href="#contact">Contate-nos</a>
				</p>
			</NavbarItems>
		</NavbarContainer>
	);
};

export default Navbar;
