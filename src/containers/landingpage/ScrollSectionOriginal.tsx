import styled from 'styled-components/macro';
import MessageAd from '@/components/landing/MessageAd';
import CarouselScroll from '@/components/landing/CarouselScroll';

const StScrollSectionOriginal = styled.section`
  /* border: 1px solid orange; */
  padding: var(--paddingL);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 100%;
  /* height: 100vh; */
  /* padding-bottom: 100vw; */
  padding-bottom: 100vh;
`;

const ScrollSectionOriginal = () => {
  return (
    <StScrollSectionOriginal className="landingSectionAnimation triggerOriginal">
      <MessageAd
        mainText="타잉에만 있는 재미"
        subText="오리지널 콘텐츠를 만나보세요!"
        detailText="차별화된 웰메이드 오리지널 콘텐츠"
      />
      <CarouselScroll></CarouselScroll>
    </StScrollSectionOriginal>
  );
};

export default ScrollSectionOriginal;
