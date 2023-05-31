import {
	TitleHow,
	Wrapper,
	Steps,
	CardInfo,
} from "../how-works/howWorks.styles";
import { FcIdea, FcMoneyTransfer, FcShipped } from "react-icons/fc";

const HowWorks = () => {
	return (
		<Wrapper id="how">
			<TitleHow>Como funciona?</TitleHow>
			<CardInfo>
				<FcIdea size={80} />
				<h4>Passo 1</h4>
				<Steps>
					<p>
						Mande sua ideia ou projeto pelo nosso e-mail
						ou WhatsApp para a avaliação de tempo,
						orçamento e criação dos protótipos.
					</p>
				</Steps>
			</CardInfo>

			<CardInfo>
				<FcMoneyTransfer size={80} />
				<h4>Passo 2</h4>
				<Steps>
					<p>
						Pagamento do projeto e desenvolvimento ativo
						junto conosco!
					</p>
				</Steps>
			</CardInfo>

			<CardInfo>
				<FcShipped size={80} />
				<h4>Passo 3</h4>
				<Steps>
					<p>
						Entrega do site, com a hospedagem e com o
						domínio escolhido pelo cliente.
					</p>
				</Steps>
			</CardInfo>
		</Wrapper>
	);
};

export default HowWorks;
