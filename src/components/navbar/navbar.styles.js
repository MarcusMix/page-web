import { styled } from "styled-components";

export const NavbarContainer = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 80px;
	background-color: #fb6107;

	& svg {
		vertical-align: -10%;
	}
`;

export const NavbarItems = styled.div`
	display: flex;
	flex-direction: row;

	& ul {
		display: flex;
	}

	& li {
		padding: 15px;
	}

	& a {
		text-decoration: none;
		color: #fff;
	}

	a:hover {
		text-decoration: underline;
		color: #fed766;
	}

	@media (max-width: 999px) {
		position: absolute;
		top: 8vh;
		right: 0;
		width: 50vw;
		height: 92vh;
		background-color: #23232e;
		flex-direction: column;
		justify-content: space-around;
		transform: translateX(100%);

		& a {
			opacity: 0;
		}
	}
`;

export const MobileMenu = styled.div`
	display: none;
	cursor: pointer;

	& svg {
		color: #fff;
	}

	@media (max-width: 999px) {
		display: block;
	}
`;
