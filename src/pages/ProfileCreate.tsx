import { StProfileSvg } from '@/styles/ProfileStyles';
import styled from 'styled-components/macro';
import { storageService } from '@/firebase/app';
import { useAuthState } from '@/firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useCreateData } from '@/firebase/firestore/useCreateData';
import { getFontStyle, rem } from '@/theme/utils';
import Svg from '@/components/svg/Svg';
import StA11yHidden from '@/components/a11yhidden/A11yHidden';
import { useRef, useCallback, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const StCreateText = styled.h2`
  ${getFontStyle('headingM')};
  margin-top: ${rem(100)};
  text-align: center;
  padding: ${rem(28)} 0;
  @media (min-width: 768px) {
    ${getFontStyle('headingL')};
  }
  @media (min-width: 1920px) {
    ${getFontStyle('headingXL')};
  }
`;

export const StUploadImageView = styled.div`
  position: relative;
  width: ${rem(114)};
  height: ${rem(114)};
  margin-top: ${rem(44)};
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    width: ${rem(150)};
    height: ${rem(150)};
  }
  @media (min-width: 1920px) {
    width: ${rem(228)};
    height: ${rem(228)};
  }
`;

export const StCreateSvgBox = styled.div`
  position: absolute;
  width: ${rem(113)};
  height: ${rem(113)};
  border: 1px solid var(--gray600);
  background-color: var(--gray700);
  top: 0;
  left: 0;
  @media (min-width: 768px) {
    width: ${rem(148)};
    height: ${rem(148)};
  }
  @media (min-width: 1920px) {
    width: ${rem(226)};
    height: ${rem(226)};
  }
  button {
    width: 100%;
    aspect-ratio: auto 1/1;
    margin: auto;
    background-color: transparent;
    border: none;
  }
`;

export const StUploadImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const StName = styled.input`
  width: ${rem(276)};
  height: ${rem(42)};
  ${getFontStyle('LabelS')};
  display: block;
  text-indent: ${rem(15)};
  background-color: var(--gray900);
  border-radius: 4px;
  border: none;
  margin-top: ${rem(32)};
  margin-left: auto;
  margin-right: auto;
  color: var(--white);
  @media (min-width: 768px) {
    width: ${rem(360)};
    height: ${rem(50)};
    ${getFontStyle('LabelM')};
  }
  @media (min-width: 1920px) {
    width: ${rem(552)};
    height: ${rem(65)};
    ${getFontStyle('LabelXL')};
  }
`;

export const StCreatePageGroupButton = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: ${rem(277)};
  gap: ${rem(7)};
  margin-top: ${rem(32)};
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    width: ${rem(360)};
    height: ${rem(50)};
    ${getFontStyle('LabelM')};
  }
  @media (min-width: 1920px) {
    width: ${rem(552)};
    height: ${rem(65)};
    ${getFontStyle('LabelXL')};
  }
  button {
    ${getFontStyle('LabelS')};
    width: ${rem(135)};
    height: ${rem(42)};
    border-radius: 4px;
    @media (min-width: 768px) {
      width: ${rem(175)};
      height: ${rem(50)};
      ${getFontStyle('LabelM')};
    }
    @media (min-width: 1920px) {
      width: ${rem(270)};
      height: ${rem(65)};
      ${getFontStyle('LabelXL')};
    }
    &:first-child {
      border: none;
      color: var(--black);
      background-color: var(--gray200);
      &:hover {
        color: var(--black);
        background-color: var(--gray100);
      }
    }
    &:last-child {
      border: 1px solid var(--gray600);
      color: var(--gray300);
      background-color: var(--black);
      &:hover {
        color: var(--white);
        border: 1px solid var(--gray100);
      }
    }
  }
`;

const ProfileCreate = () => {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [fileImage, setFileImage] = useState('');
  const { user } = useAuthState();

  const goToProfilePage = () => {
    navigate('/profile-page');
  };

  const { createData } = useCreateData(user && `users/${user.uid}/profile`);

  const [imageFile, setImageFile] = useState();

  const saveFileImage = () => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setFileImage(result);
    };
    reader.readAsDataURL(theFile);
    return setImageFile(files.length);
  };

  const onChangeName = (e) => {
    setText(e.target.value);
  };

  const isCreate = async () => {
    if (!fileImage || !text) {
      alert('프로필 이미지와 이름을 입력해주세요.');
      return;
    }
    let uuid = self.crypto.randomUUID();
    const mobileRef = storageService
      .ref()
      .child(`profile/${user.uid}/${uuid}/mobile`);
    const response1 = await mobileRef.putString(fileImage, 'data_url');
    const mobileUrl = await response1.ref.getDownloadURL();
    const storageID = uuid;

    await createData({
      name: text,
      mobileUrl,
      storageID,
    });

    goToProfilePage();
  };

  const inputRef = useRef(null);

  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  return (
    <>
      <Helmet>
        <title>프로필 생성 페이지</title>
        <meta
          name="description"
          content="타잉의 프로필들을 생성할 수 있는 생성 페이지 입니다."
        />
      </Helmet>
      <StCreateText>프로필 추가</StCreateText>
      <StUploadImageView>
        <StUploadImage
          src={fileImage}
          alt="변경할 프로필 사진입니다."
          ImageURL
        />
        {imageFile == null && (
          <StCreateSvgBox>
            <StProfileSvg>
              <StA11yHidden as="label" htmlFor="imgUpload">
                이미지 업로드
                <input
                  id="imgUpload"
                  type="file"
                  accept="image/*"
                  ref={inputRef}
                  onChange={saveFileImage}
                />
              </StA11yHidden>
              <button
                label="이미지 업로드 버튼"
                onClick={onUploadImageButtonClick}
              >
                <Svg
                  id="profile-edit-pencil"
                  width={35}
                  height={35}
                  tabletW={77}
                  tabletH={77}
                  desktopW={132}
                  desktopH={132}
                />
              </button>
            </StProfileSvg>
          </StCreateSvgBox>
        )}
      </StUploadImageView>
      <StA11yHidden as="label" htmlFor="nickname">
        닉네임 입력란
      </StA11yHidden>
      <StName
        id="nickname"
        type="text"
        onChange={onChangeName}
        value={text}
        placeholder="닉네임을 입력하세요"
      />
      <StCreatePageGroupButton>
        <button
          type="submit"
          onClick={() => {
            isCreate();
            goToProfilePage();
          }}
        >
          확인
        </button>
        <button type="button" onClick={goToProfilePage}>
          취소
        </button>
      </StCreatePageGroupButton>
    </>
  );
};

export default ProfileCreate;
