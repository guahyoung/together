import LoginForm from '@/components/login/LoginForm';
import { Helmet } from 'react-helmet-async';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>타잉로그인</title>
        <meta
          name="description"
          content="타잉의 컨텐츠들을 즐기기 위한 로그인 페이지입니다."
        />
      </Helmet>
      <LoginForm />
    </>
  );
};

export default LoginPage;
