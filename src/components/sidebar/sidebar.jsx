
import { GrFormClose } from "react-icons/gr";
import { Container } from "./sidebar.styles";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ active }) => {
	const closeSidebar = () => {
		active(false);
		console.log("click");
	};

	return (
		<Container sidebar={active}>
			<GrFormClose onClick={closeSidebar} size={40} />

			<p>
			<a href="#services" onClick={closeSidebar}>
					Nossos serviços
				</a>
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
