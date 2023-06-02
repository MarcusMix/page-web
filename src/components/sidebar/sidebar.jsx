// import { NavbarItems } from "../navbar/navbar.styles";

import { NavLink } from "react-router-dom";

import { GrFormClose } from "react-icons/gr";
import { Container, ButtonClose } from "./sidebar.styles";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ active }) => {
	const closeSidebar = () => {
		active(false);
		console.log("click");
	};

	return (
		<Container sidebar={active}>
			<ButtonClose>
				<GrFormClose onClick={closeSidebar} size={60} />
			</ButtonClose>
			<p>
				<NavLink to="/projects">Projetos</NavLink>
			</p>
			<p>
				<a href="#why" onClick={closeSidebar}>
					Peça o seu
				</a>
			</p>
			<p>
				<a href="#how" onClick={closeSidebar}>
					Como funciona
				</a>
			</p>
			<p>
				<a href="#contact" onClick={closeSidebar}>
					Contate-nos
				</a>
			</p>
		</Container>
	);
};

export default Sidebar;
