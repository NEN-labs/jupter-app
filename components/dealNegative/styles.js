import styled from 'styled-components';

export const Section = styled.div`
  background: url("../rings-horizontal-bg.png");
  background-position: center;
  background-size: cover;
  height: 100vh;
	position: relative;
`;

export const Container = styled.div`
	align-items: center;
  display: flex;
	height: 100%;
	justify-content: center;
	position: relative;
`;

export const Modal = styled.div`
  background: var(--BG, linear-gradient(169deg, #282828 8.42%, #202020 48.96%, #202020 95.87%));
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 40px;
	padding: 50px;
`;

export const ModalContent = styled.div`
	align-items: center;
  display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 550px;
	width: 100%;
`

export const ModalHeader = styled.div`
	align-items: center;
  display: flex;
  flex-direction: column;
	margin: 0 0 15px;
`;

export const ModalHeading = styled.p`
  font-size: 35px;
	text-align: center;
`;

export const ModalSubtitle = styled.p`
  font-size: 18px;
	margin: 15px 0 0;
	text-align: center;
`;

export const CompanyLogoWrapper = styled.div`
	margin: 40px 0;
	max-width: 224px;
  width: 100%;
`;

export const DealDescriptionSpan = styled.span`
	color: #FE6433;
	cursor: pointer;
	text-decoration: underline;
`;

export const DealDescription = styled.p`
	font-size: 30px;
	text-align: center;
`;

export const ButtonsBox = styled.div`
	align-items: center;
  display: flex;
	justify-content: center;
	margin: 60px auto 0;
	width: 100%;
`;

export const LogoWrapper = styled.div`
	align-items: center;
	bottom: 50px;
	display: flex;
	justify-content: center;
	position: absolute;
	width: 100%;
`;