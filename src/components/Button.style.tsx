import styled from 'styled-components'
import { theme } from './Theme'


export const ButtonStyle = styled.div`
  background-color:${({ theme: Theme }) => theme.bgColor.primary};
  width: 218px;
  height: 31.91px;
  border-radius: 0px 0px 8px 8px;
  display:flex;
  justify-content:center;
  align-items:center;

  img{
    width:12px;
    height:13.5px;
    margin-right:14px;
  }

  span{
    font-weight: 600;
    font-size: 14px;
    line-height:18px;
    color:${({ theme }) => theme.color.secondary}
  }
`

