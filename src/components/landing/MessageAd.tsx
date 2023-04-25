import styled from 'styled-components/macro';
import { getFontStyle } from '@/theme/utils';
import { PropTypes } from 'prop-types';

const StMessageAd = styled.div`
  display: flex;
  flex-flow: column nowrap;
  color: var(--white);
  text-align: center;
  padding-bottom: var(--spacingM);
  ${getFontStyle('headingL')};
  span:nth-child(2) {
    ${getFontStyle('ParagraphS')};
    margin-top: var(--spacingXXS);
    color: var(--gray200);
  }
  span:nth-child(3) {
    ${getFontStyle('ParagraphS')};
    margin-top: 0;
    color: var(--gray200);
  }
  @media (min-width: 768px) {
    ${getFontStyle('headingXL')};
    span:nth-child(2) {
      ${getFontStyle('LabelM')};
    }
    span:nth-child(3) {
      ${getFontStyle('LabelS')};
    }
  }
  @media (min-width: 1920px) {
    ${getFontStyle('headingXXXL')};
    span:nth-child(2) {
      ${getFontStyle('LabelXL')};
    }
    span:nth-child(3) {
      ${getFontStyle('ParagraphL')};
    }
  }
`;

const MessageAd = (props) => {
  return (
    <StMessageAd
      title={props.mainText}
      sub={props.subText}
      detail={props.detailText}
    >
      <h2 className="landingElementAnimation">{props.mainText}</h2>
      <span className="landingElementAnimation">{props.subText}</span>
      <span className="landingElementAnimation">{props.detailText}</span>
    </StMessageAd>
  );
};

export default MessageAd;

MessageAd.propTypes = {
  /**
   * 문자열만 가능합니다.
   */
  mainText: PropTypes.string.isRequired,
  subText: PropTypes.string,
  detailText: PropTypes.string,
};

MessageAd.defaultProps = {
  mainText: '내가 찾던 재미',
  subText: '보고 싶은 콘텐츠를 발견하세요!',
  detailText:
    '최신, 인기 TV프로그램, 영화, 해외시리즈, 파라마운트+ 오리지널 및 독점',
};
