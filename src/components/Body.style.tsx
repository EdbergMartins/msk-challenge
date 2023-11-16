import styled, { keyframes } from 'styled-components'
import { theme } from './Theme'

export const StyledBody = styled.body`
  background-color:${({ theme }) => theme.bgColor.tertiary};
  width:100%;
  justify-content: center;
  display: flex;
  align-items: center;
  height: 100vh;
  padding: 5%;
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
export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SkeletonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Spinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-top: 8px solid #333;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;


