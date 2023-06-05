import { styled } from "styled-components";

export const ServicesContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100vh;
	background-color: #fff;
	text-align: justify;
	color: #000;

	& h1 {
		padding: 1rem;
		font-size: 40px;
		color: #000;
	}

	h2 {
		font-size: 20px;
		color: #fb6107;
		padding: 1rem;
	}

	& p {
		padding: 1rem;
		margin: auto 20%;
	}

	@media (max-width: 1400px) {
		h1 {
			font-size: 35px;
			color: #000;
		}
	}



	@media (max-width: 1400px) {
		height: 100%;

		h1 {
			font-size: 30px;
			color: #000;
		}

		h2 {
			font-size: 19px;
		}

		p {
			font-size: 14px;
			margin: auto 10%;
		}
	}
`;
