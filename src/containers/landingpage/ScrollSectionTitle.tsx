import styled from 'styled-components/macro';
import MessageTitle from '@/components/landing/MessageTitle';
import PrimaryButton from '@/components/landing/PrimaryButton';

const StScrollSectionTitle = styled.section`
  /* border: 1px solid red; */
  display: flex;
  padding: var(--paddingL);
  padding-top: 20vh;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background: top no-repeat;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 85%,
      rgba(0, 0, 0, 1)
    ),
    url(/assets/landing-img/bg-mobile-modified.png);
  background-size: 100%;
  @media (min-width: 768px) {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 85%,
        rgba(0, 0, 0, 1)
      ),
      url(/assets/landing-img/bg-tablet.png);
  }
  @media (min-width: 1920px) {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 85%,
        rgba(0, 0, 0, 1)
      ),
      url(/assets/landing-img/bg-desktop.png);
  }
`;

const ScrollSectionTitle = () => {
  return (
    <StScrollSectionTitle className="landingSectionAnimation">
      <MessageTitle />
      <PrimaryButton>새로워진 타잉을 만나보세요!</PrimaryButton>
    </StScrollSectionTitle>
  );
};

export default ScrollSectionTitle;
