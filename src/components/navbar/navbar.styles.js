import { styled } from "styled-components";

export const NavbarContainer = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	/* width: 100vw; */
	height: 80px;
	background-color: blue;
`;

export const NavbarItems = styled.div`
	display: flex;
	flex-direction: row;
	list-style-type: none;
    

    & a {
        color: #fff;
        padding: 15px;
    }
`;
