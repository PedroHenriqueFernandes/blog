import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  width: 54rem;
  margin-top: -6.625rem;
  padding: 2.5rem 2rem;
  gap: 2rem;
  background-color: ${({ theme }) => theme.profile};
  border-radius: 10px;
`

export const PostSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0.5rem;
    width: 100%;
  }
`

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
`

export const TitleIssue = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h1 {
    color: ${({ theme }) => theme.title};
  }

  p {
    color: ${({ theme }) => theme.blue};
  }
`

export const GithubLinkContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  gap: 0.5rem;
  color: ${({ theme }) => theme.blue};
  text-decoration: none;
  line-height: 0;

  p {
    line-height: 0;
    color: ${({ theme }) => theme.blue};
  }
`

export const ProfileCharacteristics = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 2rem;
`

export const ProfileCharacteristic = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  p {
    line-height: 0;
  }
`

export const ProfileCharacteristicIcon = styled.img`
  width: 18px;
  height: 18px;
`
