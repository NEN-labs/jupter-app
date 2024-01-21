import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
  0% { 
		opacity: 0; 
	}
  100% { 
		opacity: 1;
	}
`

export const IconWrapper = styled.div`
  animation: ${FadeIn} 0.8s ease-out;
  align-items: center;
	background-image: linear-gradient(180deg, #222 0%, #000 135.83%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  height: 60px;
  position: absolute;
  right: 25px;
  top: 25px;
  width: 60px;

  img {
    max-width: 40px;
    width: 100%;
  }
`;
