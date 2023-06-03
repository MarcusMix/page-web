import { NavbarContainer, NavbarItems } from "./navbar.styles";

import { HiOutlineGlobeAlt } from "react-icons/hi";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { GrFormClose } from "react-icons/gr";

// import { useState } from "react";

// import Sidebar from "../sidebar/sidebar";

const Navbar = () => {
	// const [sidebar, setSidebar] = useState(true);

	// const showSidebar = () => setSidebar(!sidebar);

	return (
		<NavbarContainer>
			<div>
				<h1>
					<HiOutlineGlobeAlt /> Site para sua Marca
				</h1>
			</div>
			<NavbarItems>
				<ul>
					<li>
						<a href="#services">Nossos serviços</a>
					</li>
					<li>
						<a href="#why">Peça o seu</a>
					</li>
					<li>
						<a href="#how">Como funciona</a>
					</li>
					<li>
						<a href="#contact">Contato</a>
					</li>
				</ul>
			</NavbarItems>
			{/* <MobileMenu>
				{sidebar ? <RxHamburgerMenu size={30} onClick={showSidebar}/> : <GrFormClose size={40} onClick={showSidebar} />}
				{!sidebar && <Sidebar active={setSidebar} />}
			</MobileMenu> */}
		</NavbarContainer>
	);
};

export default Navbar;
