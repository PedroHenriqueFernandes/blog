import styled from 'styled-components'

export const LayoutContainer = styled.div`
  height: 100%;
  margin: 0 auto 2rem auto;

  background: ${(props) => props.theme.background};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LayoutOutlet = styled.div`
  max-width: 54rem;
`
