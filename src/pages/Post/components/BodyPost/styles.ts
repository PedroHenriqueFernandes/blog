import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

export const BodyPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 2rem;
`

export const Markdown = styled(ReactMarkdown)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  li,
  a,
  p {
    font-weight: regular;
    font-size: 1rem;
    color: ${(props) => props.theme.text};
  }

  code {
    display: block;
    font-weight: 400;
    font-size: 1rem;
    padding: 1rem;
    background: ${(props) => props.theme.post};
    border-radius: 2px;
  }

  li {
    list-style: disc;
  }
`
