import { styled } from "styled-components";

export const WhyContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100%;
	background-color: #fff;
	color: #000;

	& h2 {
		font-size: 20px;
		color: #11151c;
		text-align: center;
		padding: 1rem;
		font-size: 40px;
		color: #000;
		margin-top: 13rem;
	}

	& h3 {
		text-align: center;
		padding: 1rem;
		margin: auto 10%;
		color: #fb6107;
	}

	& p {
		padding: 1rem;
		margin: auto 20%;
		text-align: justify;
	}

	@media (max-width: 1400px) {
		height: 100%;

		p {
			font-size: 14px;
			margin: auto 10%;
		}

		h3 {
			font-size: 19px;
		}

		h2 {
			margin-top: 1rem;
		}
	}
`;
