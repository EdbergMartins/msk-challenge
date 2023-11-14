import styled from 'styled-components'
import { theme } from './Theme'

export const StyledBody = styled.body`
  background-color:${({ theme }) => theme.bgColor.tertiary};
  width:100%;
  height:100vh;
  justify-content: center;
  display: flex;
  align-items: center;
`