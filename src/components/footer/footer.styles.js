import { styled } from "styled-components";

export const FooterContainer = styled.footer`
	display: flex;
	align-items: center;
	justify-content: space-around;
	height: 40vh;
	flex-direction: column;

	& h5 {
		color: #fb6107;
	}
`;

export const FooterContent = styled.footer`
	display: flex;
	padding: 2rem;
	flex-wrap: wrap;
`;

export const FooterItems = styled.div`
	font-size: 1.3rem;
	color: #f9f9f9;
	background-color: #242424;
	text-align: left;
	padding: 0 2.5rem;

	@media (max-width: 768px) {
		font-size: 1rem;
	}

	a {
		color: #fb6107;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
`;
