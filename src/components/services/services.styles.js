import { styled } from "styled-components";

export const ServicesContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100vh;
	background-color: #7a7a7a;

	& h1 {
		padding: 1rem;
		font-size: 40px;
		color: #000;
	}

	h2 {
		font-size: 20px;
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
