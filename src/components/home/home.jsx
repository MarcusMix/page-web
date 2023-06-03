import { ContainerHome, MainTitle } from "./home.styles";

import { FaMoneyBillWave, FaPencilAlt } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { IoMdHeart } from "react-icons/io";

import Image from "../../assets/edited.png";

const Home = () => {
	return (
		<ContainerHome>
			<MainTitle>
				Faça seu site rápido e de forma segura!
			</MainTitle>
			<h3>
			Dê à sua marca o palco que ela merece com um site profissional e impactante
			</h3>
			
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
