import { useEffect } from 'react';
import { useReadData } from '@/firebase/firestore';
import styled, { keyframes } from 'styled-components/macro';
import { string } from 'prop-types';

const StCarouselAutoSecond = styled.section`
  position: relative;
  overflow: hidden;
  height: (102+8) px;
  width: 100%;
  @media (min-width: 1000px) {
    height: (264+16) px;
  }
`;

const autoPlayM = keyframes`
  0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-189px * 5));
    }
`;

const autoPlayL = keyframes`
  0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-486px * 5));
    }
`;

const StAutoContainer = styled.div`
  object-fit: contain;
  width: calc(189px * 5);
  display: flex;
  height: (102+8) px;
  position: relative;
  animation: ${autoPlayM} linear infinite;
  animation-duration: ${(props) => props.speed};
  @media (min-width: 1000px) {
    width: calc(486px * 5);
    min-height: (264+16) px;
    animation: ${autoPlayL} linear infinite;
    animation-duration: ${(props) => props.speed};
  }
`;

const StImgItem = styled.img`
  height: (102+8) px;
  width: 181px;
  margin: 8px 8px 0 0;
  border-radius: 4px;
  @media (min-width: 1000px) {
    height: (264+16) px;
    width: 470px;
    margin: 16px 16px 0 0;
    border-radius: 8px;
  }
`;

const CarouselAutoSecond = ({ speed }) => {
  const { readData, data } = useReadData('landing-contents-second');
  useEffect(() => {
    readData();
  }, []);

  return (
    <StCarouselAutoSecond className="landingElementAnimation">
      <StAutoContainer speed={speed} className="landingAutoContainerAnimation">
        {data?.map((data) => {
          return (
            <StImgItem key={data.id} src={data.desktopUrl} alt={data.alt} />
          );
        })}
        {data?.map((data) => {
          return (
            <StImgItem key={data.id} src={data.desktopUrl} alt={data.alt} />
          );
        })}
      </StAutoContainer>
    </StCarouselAutoSecond>
  );
};

export default CarouselAutoSecond;

CarouselAutoSecond.propTypes = {
  /**
   * 문자만 가능합니다. ex)'20s'
   */
  speed: string.isRequired,
};

CarouselAutoSecond.defaultProps = {
  speed: '30s',
};
