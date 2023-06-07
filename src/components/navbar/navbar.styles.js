import { styled } from "styled-components";

export const NavbarContainer = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	height: 80px;
	background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,138,70,1) 0%, rgba(255,210,60,1) 100%);
	padding: 10px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	position: sticky;
	top: 0;

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
