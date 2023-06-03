import {
	ContactContainer,
	ContactContent,
} from "./contact.styles";

import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
	return (
		<ContactContainer id="contact">
			<ContactContent>
				<h2>Contato</h2>
				<p>Mande sua idéia no nosso WhatsApp!</p>
				<FaWhatsapp size={55} />
		
					
						<a href="https://wa.me/5548996162581?text=Eu+gostaria+de+um+site+com+as+seguintes+informa%C3%A7%C3%B5es...">
							Clique aqui
						</a>
			
			</ContactContent>
		</ContactContainer>
	);
};

export default Contact;
