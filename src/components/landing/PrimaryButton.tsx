import { string } from 'prop-types';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { getFontStyle } from '@/theme/utils';
import Svg from '@/components/svg/Svg';

const StPrimaryButton = styled(Link)`
  &:hover {
    background-color: var(--secondary);
  }
  background-color: var(--primary);
  margin-top: var(--spacingS);
  padding: 0.7em 1.6em 0.7em 4.5em;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: right;
  ${getFontStyle('LabelS')};
  @media (min-width: 768px) {
    ${getFontStyle('LabelM')};
  }
  @media (min-width: 1920px) {
    ${getFontStyle('LabelXL')};
  }
`;

const StSvg = styled.div`
  position: absolute;
  top: 0;
  left: 0.9em;
`;

const PrimaryButton = ({ children }) => {
  return (
    <StPrimaryButton to="/main" className="landingElementAnimation">
      <StSvg>
        <Svg id="symbol-logo" width="2.4em" height="2.4em" />
      </StSvg>
      {children}
    </StPrimaryButton>
  );
};

export default PrimaryButton;

PrimaryButton.propTypes = {
  /**
   * 문자열만 가능합니다.
   */
  children: string.isRequired,
};

PrimaryButton.defaultProps = {
  children: '문구를 적어주세요',
};
