import RegisterForm from '@/components/register/RegisterForm';
import { Helmet } from 'react-helmet-async';

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>타잉회원가입</title>
        <meta
          name="description"
          content="타잉의 컨텐츠들을 즐기기 위한 계정 회원가입 페이지입니다."
        />
      </Helmet>
      <RegisterForm></RegisterForm>
    </>
  );
};

export default RegisterPage;
