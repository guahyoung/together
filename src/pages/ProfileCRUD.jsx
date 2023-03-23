import { StLayoutProfile, StProfileButton } from '@/components/profile/Profile';
import { useState } from 'react';
import styled from 'styled-components/macro';

const StUploadImageView = styled.div`
  width: 50%;
  aspect-ratio: auto 1/1;
  margin: 50px auto;
  border: 1px solid var(--gray600);
`;

const StUploadImage = styled.img`
  width: 100%;
  height: 100%;
`;

const StImageFile = styled.input`
  width: 50%;
  height: 30px;
  display: block;
  margin: 50px auto 0 auto;
`;

const StName = styled.input`
  width: 50%;
  height: 30px;
  display: block;
  margin: 10px auto 0 auto;
`;

const ProfileCRUD = () => {
  const [text, setText] = useState('');
  const [fileImage, setFileImage] = useState('');

  const saveFileImage = (e) => {
    const ImageURL = URL.createObjectURL(e.target.files[0]);
    setFileImage(ImageURL);
  };

  const onChangeName = (e) => {
    setText(e.target.value);
  };

  return (
    <StLayoutProfile>
      <StUploadImageView>
        <StUploadImage
          src={fileImage}
          alt="변경할 프로필 사진입니다."
          ImageURL
        />
      </StUploadImageView>
      <StImageFile type="file" onChange={saveFileImage} />
      <StName onChange={onChangeName} value={text} />
      <StProfileButton>저장</StProfileButton>
    </StLayoutProfile>
  );
};

export default ProfileCRUD;