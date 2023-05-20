import { ContactContainer, ContactButton, ButtonTop } from "./contact.styles";

import {FaWhatsapp} from 'react-icons/fa'

const Contact = () => {
	return (
		<ContactContainer id="contact">
			<h2>Contato</h2>
			<p>
				Mande sua idéia no nosso WhatsApp!
			</p>
			<FaWhatsapp size={55}/>
			<ContactButton>
				<ButtonTop><a href="https://wa.me/5548996162581?text=Eu+gostaria+de+um+site+com+as+seguintes+informa%C3%A7%C3%B5es...">Clique aqui</a></ButtonTop>
			</ContactButton>
		</ContactContainer>
	);
};

export default Contact;
