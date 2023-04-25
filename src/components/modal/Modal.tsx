import styled from 'styled-components/macro';
import { getFontStyle, rem } from '@/theme/utils';
import ModalPortal from '@/components/modal/ModalPortal';
import { string, func } from 'prop-types';

const StModal = styled.div`
  z-index: 20;
  width: ${rem(196)};
  height: ${rem(91)};
  background-color: var(--dark-bg2);
  border-radius: 4px;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  p {
    ${getFontStyle('ParagraphS')};
    color: var(--white);
    height: ${rem(51)};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button {
    width: ${rem(73)};
    height: ${rem(19)};
    margin-top: ${rem(10.5)};
    border: transparent;
    background-color: transparent;
    color: var(--gray300);
    ${getFontStyle('ParagraphS')};
    &:hover {
      color: var(--white);
    }
  }
  @media (min-width: 768px) {
    width: ${rem(295)};
    height: ${rem(110)};
    p {
      height: ${rem(63)};
    }
  }
  @media (min-width: 1920px) {
    width: ${rem(526)};
    height: ${rem(192)};
    p {
      ${getFontStyle('ParagraphL')};
      height: ${rem(110)};
    }
    button {
      ${getFontStyle('ParagraphL')};
      width: ${rem(173)};
      height: ${rem(34)};
    }
  }
`;

const StButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button:nth-child(2) {
    border-left: 1px solid var(--gray400);
  }
`;

const StOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  top: 0;
  left: 0;
  z-index: 10;
`;

const Modal = ({ message, onClickHandler, cancelHandler }) => {
  return (
    <ModalPortal>
      <StOverlay />
      <StModal role="dialog">
        <p>{message}</p>
        <StButton>
          <button type="button" onClick={onClickHandler}>
            확인
          </button>
          {cancelHandler && (
            <button type="button" onClick={cancelHandler}>
              취소
            </button>
          )}
        </StButton>
      </StModal>
    </ModalPortal>
  );
};

export default Modal;

Modal.propTypes = {
  message: string.isRequired,
  onClickHandler: func.isRequired,
  cancelHandler: func,
};
