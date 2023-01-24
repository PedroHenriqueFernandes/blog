import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    width: 54rem;
    margin-top: -6.625rem;
    padding: 2.5rem 2rem;
    gap: 2rem;
    background-color: ${({ theme }) => theme.profile};
    border-radius: 10px;
`;

export const ProfileImageContainer = styled.img`
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 1.5rem;
`;

export const ProfileNameAndBioContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const ProfileInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    width: 100%;

    p{
        color: ${({ theme }) => theme.text};
    }
`;

export const NameUserAndGithubLinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    h1{
        color: ${({ theme }) => theme.title};
    }
`;

export const GithubLinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    gap: 0.5rem;
    color: ${({ theme }) => theme.blue};

    p{
        line-height: 0;
    }
`;

export const ProfileCharacteristics = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 2rem;
`;

export const ProfileCharacteristic = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;

    p{
        line-height: 0;
    }
`;

export const ProfileCharacteristicIcon = styled.img`
    width: 18px;
    height: 18px;
`;