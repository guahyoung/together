import { useAuthState, useSignIn } from '@/firebase/auth';
import { StContainer, StForm, StInner, StTitle } from '@/styles/FormStyles';
import { getFontStyle, rem } from '@/theme/utils';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import FormInput from '@/components/forminput/FormInput';
import LoadingSpinner from '@/components/loading/LoadingSpinner';

const StInfo = styled.p`
  color: var(--gray400);
  margin-top: ${rem(20)};
  font-size: ${rem(14)};
  ${getFontStyle('ParagraphS')};
  @media (min-width: 768px) {
    ${getFontStyle('ParagraphM')};
  }
  @media (min-width: 1920px) {
    ${getFontStyle('ParagraphL')};
  }
  a {
    color: var(--gray200);

    &:hover {
      color: var(--gray100);
    }
  }
`;

const StFind = styled.p`
  color: var(--gray300);
  ${getFontStyle('ParagraphS')};
  &:hover {
    color: var(--gray100);
  }
  @media (min-width: 768px) {
    height: ${rem(50)};
    ${getFontStyle('ParagraphM')};
  }
  @media (min-width: 1920px) {
    height: ${rem(86)};
    ${getFontStyle('ParagraphL')};
  }
  &:first-child::after {
    content: '';
    border: 1px solid var(--gray800);
    margin: 0 ${rem(40)};
  }
`;

const StFindContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StFindInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${rem(42)};
  padding: ${rem(16)};
  background-color: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 4px;
  width: ${rem(288)};
  ${getFontStyle('LabelS')};
  &:hover {
    background-color: var(--secondary);
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

const initialFormState = {
  email: null,
  password: '',
};

const LoginForm = () => {
  const formStateRef = useRef(initialFormState);

  const { isLoading: isLoadingSignIn, signIn } = useSignIn();
  const { isLoading, error, user } = useAuthState();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    const { email, password } = formStateRef.current;

    await signIn(email, password);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return navigate('/*');
  }

  if (user) {
    return navigate('/main');
  }

  return (
    <StContainer>
      <StInner>
        <StTitle>TVING ID 로그인</StTitle>
        <StForm onSubmit={handleSignIn}>
          <FormInput
            label="이메일"
            name="email"
            type="email"
            placeholder="아이디(이메일)"
            autoComplete="email"
            onChange={handleChangeInput}
            required
          />
          <FormInput
            label="비밀번호"
            name="password"
            type="password"
            placeholder="비밀번호"
            onChange={handleChangeInput}
            required
          />
          <StButton type="submit" disabled={isLoadingSignIn}>
            {!isLoadingSignIn ? '로그인하기' : '로그인 중...'}
          </StButton>
        </StForm>
        <StFindContainer>
          <StFindInner>
            <StFind>
              <Link to="/findid">아이디찾기</Link>
            </StFind>
            <StFind>
              <Link to="/findpassword">비밀번호찾기</Link>
            </StFind>
          </StFindInner>
          <StInfo>
            아직 계정이 없으신가요? <Link to="/register">회원가입하기</Link>
          </StInfo>
        </StFindContainer>
      </StInner>
    </StContainer>
  );
};

export default LoginForm;
