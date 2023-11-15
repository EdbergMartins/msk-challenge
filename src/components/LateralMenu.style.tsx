import styled from 'styled-components'
import { theme } from './Theme'

export const LateralMenuStyled = styled.div`
  width: 486px;
  height: 119vh;
  background-color: #0F52BA;
  position: absolute;
  right: 0;
  top: 0;
  padding: 36px 54px 42px 47px;
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
`
export const HeaderCartStyled = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
  
  span{
    font-size: 27px;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: left;
    color:${({ theme }) => theme.color.secondary};
    width:180px;
    display:flex
  }

  img{
    position: relative;
    width: 38px;
    height: 38px;
    right: -30px
  }

`
export const CloseButton = styled.img`
  width: 38px;
  height: 38px;
  &:hover{
    cursor:pointer;
  }
`

export const BodyCartStyled = styled.div`
  width: 385px;
  height: 100vh;
  margin-top:64px;
`

export const CardCartStyled = styled.div`
  width: 379px;
  height: 95px;
  border-radius: 8px;
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
  background-color:${({ theme }) => theme.bgColor.secondary};
  display:flex;
  align-items:center;
  justify-content: space-around;
  position:absolute;
  margin-bottom:22px;

  img:first-child{
    width: 18px;
    height: 18px;
    position: absolute;
    top: -5px;
    right: -5px;
    
  }

  img:nth-child(2){
    max-height:60px;
    max-width:60px
  }

`
export const NameSpanStyled = styled.span`
  width: 113px;
  height: 33px;
`

export const QuantityStyled = styled.div`
    top: -6px;
    position: relative;
  span{
    font-size: 5px;
    font-weight: 400;
    line-height: 6px;
    letter-spacing: 0em;
    text-align: left;
    width: 11px;
    height: 6px
  }
  span:nth-child(2),
  span:nth-child(4){
    height: 11.5px;
    width:0.2px;
    background: rgba(191, 191, 191, 1);
  }

  span:nth-child(3){
    text-align-last: center;
    font-size: 8px;
    font-weight: 400;
    line-height: 10px;
    letter-spacing: 0em;
    text-align: left;
    position: relative;
    top: -1px;

  }
  button{
    border:none;
    background:none;
    padding:4px;
    &:hover{
      cursor:pointer;
    }
  }

  div{
    width: 50px;
    height: 19px;
    border-radius: 4px;
    border: 0.3px solid rgba(191, 191, 191, 1);
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
`

export const ValueStyled = styled.span`
    width: 62px;
    height: 17px;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: left;
    position:relative;
    top:3px;



`