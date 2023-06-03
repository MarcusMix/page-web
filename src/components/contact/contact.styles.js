import { styled } from "styled-components";

export const ContactContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fff;
	height: 100vh;
	flex-direction: column;
	color: #000;
	text-align: center;
`;

export const ContactContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;

	& p {
		font-size: 15px;
		margin: auto 20%;
	}

	& h2 {
		padding: 1rem;
		font-size: 60px;
		color: #212121;
	}

	& svg {
		padding: 1rem;
	}

	& img {
		padding: 2rem;
		width: 200px;
	}
`;
