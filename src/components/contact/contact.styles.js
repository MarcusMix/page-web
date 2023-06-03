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

