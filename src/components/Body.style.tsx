import styled from 'styled-components'
import { theme } from './Theme'

export const StyledBody = styled.body`
  background-color:${({ theme }) => theme.bgColor.tertiary};
  width:100%;
  justify-content: center;
  display: flex;
  align-items: center;
`

export const CardsContainerStyled = styled.div`
  width: 960px;
  height: 100%;
  display:flex;
  margin-top:60px;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:center
`


