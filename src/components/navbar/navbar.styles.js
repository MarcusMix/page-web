import { styled } from "styled-components";

export const NavbarContainer = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	/* width: 100vw; */
	height: 80px;
	background-color: #fb6107;
	/* #777DA7 */

	& svg {
		vertical-align: -10%;
	}
`;

export const NavbarItems = styled.div`
	display: flex;
	flex-direction: row;
	list-style-type: none;

	& a {
		color: #f2f2f2;
		padding: 15px;
		text-decoration: none;
	}

	:hover {
		text-decoration: underline;
		color: #FED766;
	}
`;
