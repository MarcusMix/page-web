import { styled } from "styled-components";

export const ContactContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #798478;
	height: 100vh;
	flex-direction: column;

	& h2 {
		font-size: 40px;
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
		background-color: #70B77E;
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
		background-color: #70B77E;
	}

	a {
		text-decoration: none;
		color:  #000000;
	}
`;
