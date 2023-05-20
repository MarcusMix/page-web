import { FooterContent, FooterItems, FooterContainer } from "./footer.styles";

const Footer = () => {
	return (
		<FooterContainer>
			<FooterContent>
				<FooterItems>
					<h5>Atendimento</h5>
					<p>08:00 às 18:00</p>
					<p>Segunda a Sexta</p>
				</FooterItems>
				<FooterItems>
					<h5>E-mail:</h5>
					<p>siteparasuamarca@outlook.com.br</p>
				</FooterItems>
				<FooterItems>
					<h5>Central de Dúvidas:</h5>
					<p>(48) 99616-2581</p>
				</FooterItems>
			</FooterContent>
			<FooterItems>
				<h6>Todos os direitos reservados © <a href="/">Site para sua Marca</a> </h6>
			</FooterItems>
		</FooterContainer>
	);
};

export default Footer;
