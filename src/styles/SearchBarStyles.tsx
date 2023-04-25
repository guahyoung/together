import { getFontStyle, rem } from '@/theme/utils';
import styled from 'styled-components/macro';

export const StSearchInput = styled.form`
  box-sizing: content-box;
  border-bottom: 3px solid var(--white);
  display: flex;
  justify-content: space-between;
  height: ${rem(24)};
  padding: ${rem(8.5)} 0;

  @media (min-width: 768px) {
    height: ${rem(32)};
    padding: ${rem(12)} 0;
  }

  @media (min-width: 1920px) {
    height: ${rem(57)};
    padding: ${rem(16)} 0;
  }

  input {
    height: 100%;
    width: 100%;
    background-color: transparent;
    color: var(--white);
    border: 0;
    ${getFontStyle('LabelM')}

    :focus {
      outline: none;
    }
    ::placeholder {
      color: var(--gray700);
    }

    @media (min-width: 768px) {
      ${getFontStyle('LabelL')}
    }

    @media (min-width: 1920px) {
      ${getFontStyle('LabelXXL')}
    }
  }

  button {
    border: 0;
    background-color: transparent;
  }
`;
