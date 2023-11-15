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

export const CardsContainerStyled = styled.div`
  width: 960px;
  height: 601px;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap
`


