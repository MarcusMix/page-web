import { NavbarContainer, NavbarItems, MobileMenu } from "./navbar.styles";
import { NavLink } from "react-router-dom";

import { HiOutlineGlobeAlt } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrFormClose } from "react-icons/gr";

import { useState } from "react";

import Sidebar from "../sidebar/sidebar";

const Navbar = () => {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<NavbarContainer>
			<MobileMenu>
				{sidebar ? <RxHamburgerMenu size={30} onClick={showSidebar}/> : <GrFormClose size={40} onClick={showSidebar} />}
				{!sidebar && <Sidebar active={setSidebar} />}
			</MobileMenu>
			<h1>
				<HiOutlineGlobeAlt /> Site para sua Marca
			</h1>
			<NavbarItems>
				<ul>
					<li>
						<NavLink to="/projects">Projetos</NavLink>
					</li>
					<li>
						<a href="#why">Peça o seu</a>
					</li>
					<li>
						<a href="#how">Como funciona</a>
					</li>
					<li>
						<a href="#contact">Contate-nos</a>
					</li>
				</ul>
			</NavbarItems>
		</NavbarContainer>
	);
};

export default Navbar;
