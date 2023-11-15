import styled from 'styled-components'
import { theme } from './Theme'


export const CardStyled = styled.div`
  background-color:${({ theme: Theme }) => theme.bgColor.secondary};
  border-radius: 8px;
  width: 217.56px;
  height: 285px;
  margin: 0 11px 31px 11px

`
export const ImgProductStyled = styled.img`
  display:flex;
  max-height:170px;
  border-radius:8px;
  align-items:center;
  justify-content:center
`

export const FirstLineStyled = styled.div`
  display: flex;
  margin: 14px 12px 8px 14px;
  align-items:center;

`

export const SpanNameStyled = styled.span`
font-size: 16px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0px;
text-align: left;
width:124px;
height:30px

`
export const SpanPriceStyled = styled.span`
  width: 64px;
  height: 26px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.bgColor.quintenaria};
  color:${({ theme }) => theme.color.secondary};
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0px;
  display: flex;
  justify-content: center;
  align-items: center;

`

export const SpanDescriptionStyled = styled.div`
  width: 192px;
  height: 25px;
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
  letter-spacing: 0px;
  text-align: left;
  margin: 8px 12px 12px 14px;
  white-space: normal;
  overflow: hidden; 
  text-overflow: ellipsis; 
`

export const DivImgStyled = styled.div`
  display:flex;
  justify-content:center
`