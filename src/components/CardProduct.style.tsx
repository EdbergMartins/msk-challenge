import styled from 'styled-components'
import { theme } from './Theme'


export const CardStyled = styled.div`
  background-color:${({ theme: Theme }) => theme.bgColor.secondary};
  border-radius: 8px;
  width: 217.56px;
  height: 285px;
  top: 217px;
  left: 247px;

  span:first-child {
    width: 64px;
    height: 26px;
    border-radius: 5px
  }
`

export const ImgProductStyled = styled.img`
  width:100%;
  height:138px;
  border-radius:8px;
`
