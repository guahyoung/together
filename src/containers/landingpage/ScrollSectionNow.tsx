import styled from 'styled-components/macro';
import Svg from '@/components/svg/Svg';
import { getFontStyle } from '@/theme/utils';
import PrimaryButton from '@/components/landing/PrimaryButton';

const StScrollSectionNow = styled.section`
  /* border: 1px solid green; */
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: var(--paddingL);
  ${getFontStyle('headingM')};
  @media (min-width: 768px) {
    ${getFontStyle('headingXL')};
  }
  @media (min-width: 1920px) {
    ${getFontStyle('headingXXXL')};
  }
  h2 {
    margin-top: var(--spacingS);
  }
`;

const ScrollSectionNow = () => {
  return (
    <StScrollSectionNow className="landingSectionAnimation">
      <Svg
        className="landingElementAnimation"
        id="logo2"
        width="83"
        height="32"
        tabletW="135"
        tabletH="52"
        desktopW="279"
        desktopH="110"
      />
      <h2 className="landingElementAnimation">지금 시작해보세요</h2>
      <PrimaryButton>새로워진 타잉을 만나보세요!</PrimaryButton>
    </StScrollSectionNow>
  );
};

export default ScrollSectionNow;
