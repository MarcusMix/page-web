import { styled } from "styled-components";

export const WhyWrapper = styled.div`
	height: 100vh;
	background-color: aquamarine;

	& h2 {
		font-size: 20px;
		color: #11151c;
		text-align: center;
		padding: 1rem;
		font-size: 40px;
		color: #000;
		margin: 3rem;
	}
`;

export const WhyContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 10px;
	background-color: #fff;
	margin: auto 17%;
	color: #000;

	& div {
		background-color: darkorchid;
		/* height: 300px; */
	}

	& h3 {
		text-align: center;
		padding: 1rem;
		margin: auto 10%;
		color: #fb6107;
	}

	& p {
		padding: 1rem;
		margin: auto 10%;
		text-align: justify;
	}

	@media (max-width: 1400px) {
		grid-template-columns: repeat(2, 1fr);
		height: 100%;

		margin: auto 8%;

		p {
			margin: auto 7%;
		}
	}

	@media (max-width: 768px) {
		height: 100%;
		grid-template-columns: repeat(1, 1fr);
		margin: auto 5%;

		p {
			font-size: 14px;
			margin: auto 7%;
		}

		h3 {
			font-size: 19px;
		}

		h2 {
			margin-top: 1rem;
		}
	}
`;
