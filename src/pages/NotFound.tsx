import { getFontStyle, rem } from '@/theme/utils';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';

const StNotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StNotFound = styled.div`
  ${getFontStyle('headingXXXL')};
  line-height: 120%;
  text-align: center;
  width: ${rem(800)};
  margin-top: ${rem(180)};
  padding: ${rem(90)} 0;
  box-shadow: -5px -5px 100px 5px #2c2b2b;
  border-radius: 10px;
  div {
    margin-top: ${rem(20)};
  }
  span {
    ${getFontStyle('ParagraphXL')};
    font-weight: 200;
  }
`;

const StButton = styled.button`
  padding: ${rem(10)};
  background-color: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 4px;
  width: ${rem(288)};
  ${getFontStyle('headingXL')};
  &:hover {
    background-color: var(--secondary);
  }
`;

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>타잉 에러페이지</title>
        <meta
          name="description"
          content="페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다."
        />
      </Helmet>
      <StNotFoundContainer>
        <StNotFound>
          ⚠️404 not found!⚠️
          <br />
          <div>
            <span>페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.</span>
            <br />
            <span>
              입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.
            </span>
          </div>
          <br />
          <StButton onClick={() => navigate('/')}>홈으로 이동</StButton>
        </StNotFound>
      </StNotFoundContainer>
    </>
  );
};

export default NotFound;
