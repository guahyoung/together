import styled from 'styled-components/macro';
import { getFontStyle, rem } from '@/theme/utils';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import LogoutModal from '@/components/logout/LogoutModal';

const StModalContainer = styled.div`
  width: ${rem(180)};
  height: ${rem(120)};
  border: 1px solid var(--gray800);
  border-radius: 2px;
  background: var(--dark-bg1);
  top: 100%;
  right: 0;
  z-index: 99;
  position: absolute;
  @media (min-width: 768px) {
    width: ${rem(234)};
    height: ${rem(156)};
  }
  @media (min-width: 1920px) {
    width: ${rem(360)};
    height: ${rem(240)};
  }
`;

const StProfileBox = styled(Link)`
  width: ${rem(177)};
  height: ${rem(70)};
  padding: ${rem(8)};
  border-bottom: 1px solid var(--dark-bg2);
  display: flex;
  flex-flow: row nowrap;
  @media (min-width: 768px) {
    width: ${rem(233)};
    height: ${rem(91)};
  }
  @media (min-width: 1920px) {
    width: ${rem(357)};
    height: ${rem(140)};
  }
`;

const StProfileIcon = styled.div`
  width: ${rem(45)};
  height: ${rem(45)};
  border-radius: 2px;
  background: var(--black);
  margin-top: auto;
  margin-bottom: auto;
  margin-left: ${rem(4)};
  @media (min-width: 768px) {
    margin-left: ${rem(8)};
    width: ${rem(58.5)};
    height: ${rem(58.5)};
  }
  @media (min-width: 1920px) {
    margin-left: ${rem(12)};
    width: ${rem(90)};
    height: ${rem(90)};
  }
`;

const StProfileImage = styled.img`
  width: 100%;
  height: 100%;
`;

const StProfileName = styled.div`
  ${getFontStyle('LabelS')};
  color: var(--gray200);
  margin-left: ${rem(8)};
  text-align: left;
  margin-top: auto;
  margin-bottom: auto;
  @media (min-width: 768px) {
    ${getFontStyle('LabelM')};
    margin-left: ${rem(13)};
  }
  @media (min-width: 1920px) {
    ${getFontStyle('LabelXL')};
    margin-left: ${rem(20)};
  }
  p {
    ${getFontStyle('ParagraphS')};
    color: var(--gray400);
    @media (min-width: 768px) {
      ${getFontStyle('ParagraphM')};
    }
    @media (min-width: 1920px) {
      ${getFontStyle('ParagraphXL')};
    }
  }
`;

const StLogoutBox = styled.div`
  display: flex;
  width: ${rem(159)};
  height: ${rem(47)};
  @media (min-width: 768px) {
    width: ${rem(234)};
    height: ${rem(62)};
  }
  @media (min-width: 1920px) {
    width: ${rem(360)};
    height: ${rem(97)};
  }
`;

const StLogoutButton = styled.button`
  ${getFontStyle('ParagraphS')};
  color: var(--gray200);
  margin-left: ${rem(13)};
  margin-top: auto;
  margin-bottom: auto;
  @media (min-width: 768px) {
    ${getFontStyle('ParagraphM')};
    margin-left: ${rem(18)};
  }
  @media (min-width: 1920px) {
    ${getFontStyle('ParagraphXL')};
    margin-left: ${rem(25)};
  }
`;

const LogoModal = () => {
  const [isModal, setIsModal] = useState(false);

  const closeLogoutModal = () => {
    setIsModal(false);
  };

  const stModalContainerRef = useRef(null);

  return (
    <>
      {isModal && <LogoutModal closeLogoutModal={closeLogoutModal} />}
      <StModalContainer ref={stModalContainerRef}>
        <StProfileBox
          aria-label="프로필 페이지로 이동합니다."
          to="/profile-page"
          onClick={() => {
            const modalContainer = stModalContainerRef.current;
            if (stModalContainerRef.current) {
              modalContainer.style.display = 'none';
              setTimeout(() => {
                modalContainer.style.removeProperty('display');
              }, 10);
            }
          }}
        >
          <StProfileIcon>
            <StProfileImage
              src="/assets/profile_4.png"
              alt="계정 프로필 이미지"
            />
          </StProfileIcon>
          <StProfileName>
            사용자
            <p>프로필 전환</p>
          </StProfileName>
        </StProfileBox>
        <StLogoutBox>
          <StLogoutButton
            aria-label="로그아웃 페이지로 이동합니다."
            onClick={() => setIsModal(true)}
          >
            로그아웃
          </StLogoutButton>
        </StLogoutBox>
      </StModalContainer>
    </>
  );
};

export default LogoModal;
