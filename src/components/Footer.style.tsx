import styled from 'styled-components'
import { theme } from './Theme'

export const StyledFooter = styled.footer`
  background-color:${({ theme }) => theme.bgColor.quaternary};
  width: 100%;
  height: 34px;
  top: 990px;
  display:flex;
  justify-content:center;
  align-items: center;

  span {
    color:${({ theme }) => theme.color.primary};
    font-weight: 400;
    font-size: 12px;
  }

  `
