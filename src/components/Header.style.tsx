import styled from 'styled-components'
import { theme } from './Theme'


export const StyledHeader = styled.header`
  background-color:${({ theme: Theme }) => theme.bgColor.primary};
  height: 101px;
  display:flex;
  justify-content:space-between;
  padding: 28px 88px 27px 65px
`
export const StyledLogoContainer = styled.div`
  color:${({ theme: Theme }) => theme.color.secondary};
  span:first-child{
    font-weight: 600;
    font-size: 40px;
    line-height: 19px;
    top:20px
  }
  span:second-child{
    font-weight: 300;
    font-size: 20px;
    line-height: 19px;
  }
`

export const StyledCartButton = styled.button`
    width:90px;
    height:45px;
    border-radius: 8px;
    background-color: ${({ theme: Theme }) => theme.bgColor.secondary};
    display:flex;
    align-items: center;
    border:none;
    &:hover{
      cursor:pointer;
      background-color: ${({ theme: Theme }) => theme.bgColor.tertiary};
      transform:0.5s
    }


  img {
    width: 19.01px;
    height: 18px;
    margin: 0 16px 0 15px
  }

  span {

    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;

  }
`

export const LateralMenuStyled = styled.div`
  width: 486px;
  height: 100vh;
  background-color:${({ theme }) => theme.bgColor.primary};
  position:absolute;
  left:0;
`

