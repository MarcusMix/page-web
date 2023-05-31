import { styled } from "styled-components";

export const ContactContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #7a7a7a;
	height: 100vh;
	flex-direction: column;
`;

export const ContactContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;

	& h2 {
		padding: 1rem;
		font-size: 60px;
		color: #212121;
	}

	& svg {
		padding: 1rem;
	}
`;

export const ContactButton = styled.button`
	border-radius: 0.75em;
	color: #e8e8e8;
	font-size: 17px;
	outline-color: #000000;
	font-weight: bold;
	border: none;
	margin: 1rem;

	:active {
		transform: translateY(0);
	}

	:hover {
		transform: translateY(-0.33em);
	}
`;

export const ButtonTop = styled.span`
	display: block;
	box-sizing: border-box;
	border: 2px solid #e8e8e8;
	border-radius: 0.75rem;
	padding: 0.75em 1.5em;
	background: #e8e8e8;
	color: #000000;
	transform: translateY(-0.2em);
	transition: transform 0.1s ease;

	:hover {
		transform: translateY(-0.33em);
	}

	a {
		text-decoration: none;
		color: #000000;
	}
`;
