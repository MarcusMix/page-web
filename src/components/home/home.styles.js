import { styled } from "styled-components";

export const ContainerHome = styled.div`
	display: flex;
	/* justify-content: center; */
	align-items: center;
	flex-direction: column;
	height: 100vh;

	& img {
		padding: 1rem;
		max-width: 30%;
        margin: 3rem auto;

		@media (max-width: 768px) {
			max-width: 75%;
			margin: auto;
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
			color:  #FED766;
		}

		& svg {
			vertical-align: -10%;
		}
	}
`;

export const MainTitle = styled.h1`
	font-size: 50px;
	color: #f2f2f2;
    padding: 1.5rem;

	@media (max-width: 768px) {
		font-size: 35px;
	}
`;
