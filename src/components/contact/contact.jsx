import { ContactContainer, ContactContent } from "./contact.styles";

// import { FaWhatsapp } from "react-icons/fa";

import WhatsAppImage from "../../assets/whats.png";

const Contact = () => {
	return (
		<ContactContainer id="contact">
			<ContactContent>
				<h2>Contato</h2>
				<p>Mande sua idéia ou dúvida no nosso WhatsApp!</p>
				{/* <FaWhatsapp size={55} /> */}

				<a href="https://wa.me/5548996162581?text=Eu+gostaria+de+um+site+com+as+seguintes+informa%C3%A7%C3%B5es...">
					<img src={WhatsAppImage} alt="WhatsApp button" />
				</a>
			</ContactContent>
		</ContactContainer>
	);
};

export default Contact;
