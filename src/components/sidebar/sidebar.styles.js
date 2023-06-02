import styled from "styled-components";

export const Container = styled.div`
	background-color: #171923;
	position: fixed;
	height: 100%;
	top: 0px;
	left: 0px;
	width: 300px;
	left: ${(props) => (props.sidebar ? "0" : "-100%")};
	animation: showSidebar 0.4s;
	display: flex;
	justify-content: space-around;
	flex-direction: column;

	& svg {
		color: white;
		cursor: pointer;
	}

	@keyframes showSidebar {
		from {
			opacity: 0;
			width: 0;
		}
		to {
			opacity: 1;
			width: 300px;
		}
	}

	& a {
		color: #fff;
		text-decoration: none;
	}

    & a:hover {
        text-decoration: underline;
    }
`;

export const ButtonClose = styled.div`
	color: white;
    background-color: white;
    border-radius: 50%;
`;
