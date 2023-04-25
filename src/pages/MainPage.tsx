import Carousel from '@/components/carousel/Carousel';
import Popup from '@/components/popup/Popup';
import { rem } from '@/theme/utils';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import MainBanner from '@/components/carousel/MainBanner';

const StCarouselLayout = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${rem(20)};
  @media (min-width: 768px) {
    gap: ${rem(28)};
  }
  @media (min-width: 1920px) {
    gap: ${rem(36)};
  }
`;

const MainPage = () => {
  const [isPopupModal, setIsPopupModal] = useState(false);

  const openModal = () => {
    setIsPopupModal(true);
  };

  const closeModal = () => {
    setIsPopupModal(false);
  };

  useEffect(() => {
    const expiryDate = JSON.parse(localStorage.getItem('visitCookieExpiry'));
    if (expiryDate) {
      const currentDate = new Date().getTime();

      if (currentDate > expiryDate) {
        localStorage.removeItem('visitCookieExpiry');
        openModal();
      }
    } else {
      openModal();
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>타잉 메인</title>
        <meta
          name="description"
          content="타잉의 컨텐츠들을 즐길 수 있는 메인 페이지 입니다."
        />
      </Helmet>
      {isPopupModal && <Popup closeModal={closeModal} />}
      <MainBanner />
      <StCarouselLayout>
        <Carousel title="티빙에서 꼭 봐야하는 콘텐츠" dataName="programs" />
        <Carousel
          title="Quick VOD"
          dataName="vod"
          vod={true}
          desktopSlides={5}
          tabletSlides={4}
          mobileSlides={3}
        />
        <Carousel
          title="실시간 인기 프로그램"
          dataName="programs"
          number={true}
        />
        <Carousel
          title="인기 LIVE"
          dataName="live"
          number={true}
          desktopSlides={5}
          tabletSlides={4}
          mobileSlides={3}
        />
        <Carousel
          title="오직 티빙에만 있어요"
          dataName="originals"
          desktopSlides={6}
          tabletSlides={5}
          mobileSlides={4}
        />
        <Carousel
          dataName="mini-banner"
          desktopSlides={1}
          tabletSlides={1}
          mobileSlides={1}
        />
        <Carousel
          title="이벤트"
          dataName="event"
          desktopSlides={5}
          tabletSlides={4}
          mobileSlides={3}
        />
      </StCarouselLayout>
    </>
  );
};
export default MainPage;
