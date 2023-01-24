import styled from "styled-components";

export const PostsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`;

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 26rem;
    height: 16.25rem;
    background-color: ${({ theme }) => theme.post};
    padding: 2rem;
    border-radius: 10px;
    gap: 1.25rem;
`;

export const TitleAndDateContainer = styled.div`
    display: flex;
    align-items: flex-start;

    p{
        min-width: 60px;
        line-height: 2rem;
    }
`;