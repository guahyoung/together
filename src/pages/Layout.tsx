import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { getColor, rem } from '@/theme/utils';
import { Outlet } from 'react-router';
import styled from 'styled-components/macro';

const StBaseLayout = styled.div`
  font-size: ${rem(16)};
  font-family: 'Pretendard Variable', Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
    'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  color: ${getColor('--white')};
  margin-left: auto;
  margin-right: auto;
`;

const BaseLayout = () => {
  return (
    <>
      <Header />
      <StBaseLayout>
        <Outlet />
      </StBaseLayout>
      <Footer />
    </>
  );
};

export default BaseLayout;
