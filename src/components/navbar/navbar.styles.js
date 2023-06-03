import { styled } from "styled-components";

export const NavbarContainer = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	height: 80px;
	background-color: #fb6107;
	padding: 10px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

	& svg {
		vertical-align: -10%;
	}

	@media (max-width: 999px) {
		h1 {
			font-size: 20px;
		}
	}
`;

export const NavbarItems = styled.div`
	display: flex;
	flex-direction: row;
	align-self: center;

	& ul {
		display: flex;
		list-style: none;
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
		font-size: 14px;
		h1 {
			display: none;
		}
	}
`;

// export const MobileMenu = styled.div`
// 	display: none;
// 	cursor: pointer;

// 	& svg {
// 		color: #fff;
// 	}

// 	@media (max-width: 999px) {
// 		display: block;
// 	}
// `;
