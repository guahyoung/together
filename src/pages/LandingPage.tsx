// 랜딩페이지의 오토캐러셀/스크롤 트리거 이미지의 경우, 이미지 크기가 딱 두 가지의 고정된 값만 있기 때문에, 여백 역시 고정된 px이 필요하여 px사용하였습니다.
import styled from 'styled-components/macro';
import ScrollSectionTitle from '@/containers/landingpage/ScrollSectionTitle';
import ScrollSectionOriginal from '@/containers/landingpage/ScrollSectionOriginal';
import ScrollSectionAd from '@/containers/landingpage/ScrollSectionAd';
import ScrollSectionNow from '@/containers/landingpage/ScrollSectionNow';
import { Helmet } from 'react-helmet-async';
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: 'none', duration: 10 });

let mm = gsap.matchMedia();

const StLandingPage = styled.div`
  display: flex;
  flex-flow: column nowrap;
  /* overflow-y: hidden; */
  /* .pin-spacer {
    display: flex;
  } */
`;

const LandingPage = () => {
  useLayoutEffect(() => {
    gsap.fromTo(
      '.landingSectionAnimation',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: { each: 0.1, from: 'start' },
      }
    );
    gsap.fromTo(
      '.landingElementAnimation',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: { each: 0.1, from: 'start' },
        onComplete: () => carouselScrollAnimation(),
      }
    );
    const carouselScrollAnimation = () => {
      mm.add('(max-width: 999px', () => {
        gsap.to('.imgContainer', {
          scrollTrigger: {
            trigger: '.triggerOriginal',
            start: 'top top',
            end: 'bottom 80%',
            scrub: true,
            pin: '.triggerOriginal',
            anticipatePin: 1,
            // markers: true,
          },
          x: -858,
        });
      });
      mm.add('(min-width: 1000px', () => {
        gsap.to('.imgContainer', {
          scrollTrigger: {
            trigger: '.triggerOriginal',
            start: 'top top',
            end: 'bottom 80%',
            scrub: true,
            pin: '.triggerOriginal',
            anticipatePin: 1,
            // markers: true,
          },
          x: -2748,
        });
      });
    };
  }, []);
  return (
    <>
      <Helmet>
        <title>타잉</title>
        <meta name="description" content="타잉을 소개하는 랜딩 페이지입니다." />
      </Helmet>
      <StLandingPage>
        <ScrollSectionTitle />
        <ScrollSectionOriginal />
        <ScrollSectionAd />
        <ScrollSectionNow />
      </StLandingPage>
    </>
  );
};

export default LandingPage;
