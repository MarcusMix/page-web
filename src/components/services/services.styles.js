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
		text-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.7) 0px 30px 60px -30px;
	}

	& p {
		padding: 1rem;
		margin: auto 20%;
	}

	@media (max-width: 1200px) {
        height: 100%;

		h1 {
            font-size: 30px;
            color: #000;
        }

        h2 {
            font-size: 16px;
        }

        p {
            font-size: 14px;
            margin: auto 10%;
        }
	}
`;
