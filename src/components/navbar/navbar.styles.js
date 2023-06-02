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

	@media (max-width: 999px) {
		display: block;
	}
`;
