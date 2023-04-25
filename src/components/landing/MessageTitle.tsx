import styled from 'styled-components/macro';
import { getFontStyle } from '@/theme/utils';

const StMessageTitle = styled.div`
  display: flex;
  flex-flow: column nowrap;
  color: var(--white);
  text-align: center;
  ${getFontStyle('headingM')};
  .landingSpanDetail {
    ${getFontStyle('ParagraphS')};
    color: var(--gray400);
    margin-top: var(--spacingXXS);
  }
  @media (min-width: 768px) {
    ${getFontStyle('headingL')};
    .landingSpanDetail {
      ${getFontStyle('ParagraphS')};
    }
  }
  @media (min-width: 1920px) {
    ${getFontStyle('headingXXXL')};
    .landingSpanDetail {
      ${getFontStyle('LabelXL')};
    }
  }
  h2 {
    display: flex;
    flex-flow: column nowrap;
    text-align: center;
  }
`;

function MessageTitle() {
  return (
    <StMessageTitle>
      <h2>
        <span className="landingElementAnimation">타잉 오리지널 콘텐츠,</span>
        <span className="landingElementAnimation">
          방송, 영화, 해외시리즈까지!
        </span>
        <span className="landingElementAnimation">재미를 플레이해보세요.</span>
      </h2>
      <span className="landingElementAnimation landingSpanDetail">
        간편하게 가입하고, 원하실 때 해지할 수 있어요.
      </span>
    </StMessageTitle>
  );
}

export default MessageTitle;
