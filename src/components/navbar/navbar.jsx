import { NavbarContainer, NavbarItems, MobileMenu } from "./navbar.styles";
import { NavLink } from "react-router-dom";

import { HiOutlineGlobeAlt } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";

import { useState } from "react";

import Sidebar from "../sidebar/sidebar";

const Navbar = () => {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

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
			<MobileMenu>
				<RxHamburgerMenu size={30} onClick={showSidebar} />
				{!sidebar && <Sidebar active={setSidebar}/>}
			</MobileMenu>
		</NavbarContainer>
	);
};

export default Navbar;
