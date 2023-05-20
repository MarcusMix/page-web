import { ContainerHome, MainTitle } from "./home.styles";

import { FaMoneyBillWave, FaPencilAlt } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { IoMdHeart } from "react-icons/io";

import Image from '../../assets/edited.png'

const Home = () => {
	return (
		<ContainerHome>
			<MainTitle>Tenha seu site em pouco tempo!</MainTitle>
			<ul>
				<li>
					<AiOutlineGlobal /> Crie seu site e seja conhecido
					por todos!
				</li>
				<li>
					<BsRocketTakeoffFill /> Rápido, fácil e seguro!
				</li>
				<li>
					<IoMdHeart /> Do jeitinho que você precisa.
				</li>
				<li>
					<FaMoneyBillWave /> Preço que cabe no seu bolso!
				</li>
				<li>
					<FaPencilAlt /> 100% personalizado.
				</li>
			</ul>
            <img src={Image} alt="" />
		</ContainerHome>
	);
};

export default Home;
