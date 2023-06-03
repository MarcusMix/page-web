import { styled } from "styled-components";

export const ContainerHome = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 100%;
	background-color: #fffffa;

	& h3 {
		font-size: 20px;
		color: #000;
		padding-bottom: 1rem;
		margin: 0 20%;
		text-align: center;
		
		@media (max-width: 1200px) {
			font-size: 15px;
			margin: 0.25rem 10%;
		}
	}

	& img {
		padding: 0.25rem;
		max-width: 500px;
		margin: 1rem auto;

		@media (max-width: 768px) {
			max-width: 70%;
			max-width: 300px;
		}
	}

	& ul {
		display: flex;
		flex-direction: column;
		list-style: none;
		align-items: center;
		padding: 0.5rem;

		& li {
			padding: 0.25rem;
			text-align: center;
			font-size: 20px;
			color: #212121;

			@media (max-width: 768px) {
				font-size: 16px;
				margin: 0 10%;
			}
		}
		
		& svg {
			vertical-align: -10%;
		}
	}
	`;

export const MainTitle = styled.h1`
	font-size: 40px;
	color: #212121;
	padding-top: 1.5rem;
	margin: 0 20%;
	text-align: center;

	@media (max-width: 1200px) {
		font-size: 25px;
		margin: 0 10%;
	}
`;
