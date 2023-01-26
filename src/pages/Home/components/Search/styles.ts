import styled from 'styled-components'

export const FormContainerSearch = styled.form``

export const InputSearch = styled.input`
  width: 100%;
  height: 50px;
  background: ${(props) => props.theme.input};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 6px;
  padding-left: 1rem;
  ::placeholder {
    color: ${(props) => props.theme.label};
  }

  margin-top: 0.75rem;
  margin-bottom: 3rem;
`

export const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4.5rem;
`
