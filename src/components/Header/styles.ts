import styled from "styled-components";
import group from "../../assets/group.svg";

export const HeaderContainer = styled.header`
    background-image: url(${group});
    background-repeat: no-repeat;
    background-position: 100% 0;
    background-size: 100%;
    width: 100%;
    height: 18.5rem;
    display: flex;
    justify-content: center;

    img{
        margin-top: 4rem;
        height: 6rem;
    }
`;