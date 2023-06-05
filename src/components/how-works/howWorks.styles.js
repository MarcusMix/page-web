import { styled } from "styled-components";

export const TitleHow = styled.h2`
	text-align: center;
	color:  #000;
	font-size: 40px;
	padding: 2rem;
`;

export const CardInfo = styled.div`
	display: flex;
	border-radius: 2rem;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	transition: all 300ms;
	background-color: #fb6107;
	max-width: 500px;
	max-height: 400px;
	min-height: 350px;
	min-width: 200px;
	padding: 1rem;
	margin: 1rem;

	/* @media screen {
		
	} */

	h4 {
		font-size: 30px;
	}
`;
export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: auto;
	background-color: #fffffa;
		color:  #fdfdfd;

	p {
		font-size: 20px;
		text-align: center;
	}

	& div:hover {
		opacity: 1;
		transition: all 300ms;
		transform: scale(1.1);
	}
`;

export const Steps = styled.section`
	display: flex;
	align-items: center;
	flex-direction: column;
`;
