import { styled } from "styled-components";

export const TitleHow = styled.h2`
	text-align: center;
	color: #fb6107;
	font-size: 40px;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: auto;

	p {
		font-size: 20px;
        text-align: center;
	}
`;

export const Steps = styled.section`
	display: flex;
	align-items: center;
    flex-direction: column;

`;

export const CardInfo = styled.div`
	display: flex;
    border-radius: 2rem;
	flex-direction: column;
	align-items: center;
    justify-content: space-evenly;
	transition: all 300ms;
    background-color: grey;
    width: 500px; 
    height: 400px;
    padding: 1rem;
    
	:hover {
        /* opacity: 0.8; */
        transition: all 300ms;
		transform: scale(1.1);
	}

    h4 {
        font-size: 30px;
    }
`;
