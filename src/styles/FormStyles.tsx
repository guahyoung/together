import { rem, getFontStyle } from '@/theme/utils';
import styled from 'styled-components/macro';

export const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: ${rem(150)};
`;
export const StInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: ${rem(60)};
  width: ${rem(319)};
  text-align: center;

  @media (min-width: 768px) {
    width: ${rem(416)};
  }
  @media (min-width: 1920px) {
    width: ${rem(732)};
  }
`;

export const StTitle = styled.h2`
  ${getFontStyle('headingM')};
  @media (min-width: 768px) {
    ${getFontStyle('headingXL')};
  }
  @media (min-width: 1920px) {
    ${getFontStyle('headingXXL')};
  }
`;

export const StForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: ${rem(16)};
  @media (min-width: 768px) {
    gap: ${rem(18)};
  }
  @media (min-width: 1920px) {
    gap: ${rem(34)};
  }
  div {
    display: flex;
    text-align: left;
    gap: 0;
  }
`;

export const StFormInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;
