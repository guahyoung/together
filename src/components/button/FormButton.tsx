import { getColor, getFontStyle, rem } from '@/theme/utils';
import { FC } from 'react';
import styled from 'styled-components/macro';

interface IsButton {
  isActive?: boolean;
}

interface FormButtonProps {
  type?: 'submit' | 'button';
  children: string;
  isActive?: boolean;
}

const StButton =
  styled.button <
  IsButton >
  `
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${rem(42)};
  padding: ${rem(16)};
  background-color: ${(props) =>
    props.isActive ? getColor('--primary') : getColor('--gray700')};
  color: ${(props) =>
    props.isActive ? getColor('--white') : getColor('--gray200')};
  border: none;
  border-radius: 4px;
  width: ${rem(288)};
  ${getFontStyle('LabelS')};
  &:hover {
    background-color: ${getColor('--gray600')};
  }
  @media (min-width: 768px) {
    width: ${rem(416)};
    height: ${rem(50)};
    ${getFontStyle('LabelM')};
  }
  @media (min-width: 1920px) {
    width: ${rem(732)};
    height: ${rem(86)};
    ${getFontStyle('LabelXL')};
  }
`;
const FormButton: FC<FormButtonProps> = ({
  type = 'submit',
  children,
  isActive,
}) => {
  return (
    <StButton type={type} isActive={isActive}>
      {children}
    </StButton>
  );
};

export default FormButton;
