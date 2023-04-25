import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled, { css } from 'styled-components/macro';
import { rem } from '@/theme/utils';
import Svg from '@/components/svg/Svg';
import { func, number, string } from 'prop-types';
import { useReadData } from '@/firebase/firestore';
import SkeletonBanner from '@/components/loading/SkeletonBanner';
import { Link } from 'react-router-dom';

const CustomDots = (props) => {
  const { onClick, activeIndex, dotsCount } = props;

  return (
    <>
      {Array.from({ length: dotsCount }, (_, index) => (
        <li key={index} aria-label={`${index + 1}번째 슬라이드`}>
          <button
            className={index === activeIndex ? 'active' : ''}
            onClick={() => onClick(index)}
          />
        </li>
      ))}
    </>
  );
};

CustomDots.propTypes = {
  onClick: func,
  activeIndex: number,
  dotsCount: number,
};

const StArrow = styled.button`
  position: absolute;
  top: 50%;
  ${(props) =>
    props.direction === 'prev' &&
    css`
      z-index: 1;
      left: 0;
      svg {
        color: var(--gray200);
      }
    `}

  ${(props) =>
    props.direction === 'next' &&
    css`
      right: 0;
      svg {
        color: var(--gray200);
      }
      &:hover,
      &:focus {
        svg {
          color: var(--white);
        }
      }
    `}
  transform: translateY(-50%);
  height: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Arrow = ({ onClick, direction }) => {
  return (
    <StArrow
      onClick={onClick}
      direction={direction}
      className={direction}
      aria-label={direction === 'prev' ? '이전 슬라이드' : '다음 슬라이드'}
    >
      <Svg
        id={direction === 'prev' ? 'banner-arrow-left' : 'banner-arrow-right'}
        width="3.8rem"
        height="3.8rem"
      />
    </StArrow>
  );
};

Arrow.propTypes = {
  onClick: func,
  direction: string,
};

const StSlider = styled(Slider)`
  .slick-slider {
    position: relative;
  }

  .slick-slide {
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 20%;
      background: linear-gradient(to bottom, transparent, 70%, var(--black));
    }
    a {
      outline-offset: -10px;
    }
  }

  .slick-dots {
    position: absolute;
    display: flex;
    width: ${rem(122)};
    justify-content: start;
    align-items: center;
    bottom: 5%;
    left: 4%;
    @media (min-width: 1920px) {
      bottom: 10%;
      left: 5%;
    }
  }

  .slick-dots li {
    margin: 0;
    @media (min-width: 768px) {
      margin: auto;
    }
    &:first-child :before {
      font-size: 0;
      &:hover {
        font-size: 0;
      }
    }
    &:first-child {
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
      }
    }
  }

  .slick-dots li button:focus {
    outline: rgba(0, 150, 255, 1) auto 1px;
  }

  .slick-dots button:before {
    color: var(--gray400);
    font-size: 0.8rem;
  }

  .slick-dots li.slick-active button:before {
    color: var(--white);
    opacity: 1;
  }

  button {
    background-color: transparent;
    border: none;
  }
`;

const StImage = styled.img`
  object-fit: cover;
`;

const StDescription = styled.span`
  font-family: 'Noto Sans KR';
  font-size: 1.3rem;
  line-height: 1.44;
  color: var(--white);
  font-weight: 300;
  position: absolute;
  bottom: 15%;
  left: 5%;
`;

const MainBanner = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const sliderRef = useRef(null);

  const play = () => {
    sliderRef.current.slickPlay();
    setIsPaused(false);
  };

  const pause = () => {
    sliderRef.current.slickPause();
    setIsPaused(true);
  };

  const togglePlayPause = () => {
    if (isPaused) {
      play();
    } else {
      pause();
    }
  };

  const handleSlideKeyUp = (e, index) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      if (index < sliderRef.current.props.children.length - 1) {
        sliderRef.current.slickNext();
      } else {
        sliderRef.current.slickGoTo(0);
      }
    }
  };

  const settings = {
    dots: true,
    appendDots: (dots) => (
      <ul>
        <li>
          <button
            className="slick-pause-button"
            aria-label={isPaused ? '재생' : '정지'}
            onClick={togglePlayPause}
          >
            {isPaused ? (
              <Svg id="play-button" width={15} height={15} />
            ) : (
              <Svg id="pause-button" width={15} height={15} />
            )}
          </button>
        </li>
        {dots}
      </ul>
    ),
    customPaging: (i) => <button aria-label={`${i + 1}번째 슬라이드`} />,
    dotsClass: 'slick-dots custom-dots',
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <Arrow direction="prev" />,
    nextArrow: <Arrow direction="next" />,
    beforeChange: (_, next) => {
      setActiveSlide(next);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { isLoading, readData, data } = useReadData('banner');

  useEffect(() => {
    readData();
  }, []);

  return (
    <>
      {data && (
        <StSlider ref={sliderRef} {...settings}>
          {data?.map((data, index) => {
            return (
              <div key={data.id}>
                <Link
                  to="/main"
                  tabIndex={activeSlide === index ? 0 : -1}
                  onKeyUp={(e) => handleSlideKeyUp(e, index)}
                >
                  <StImage src={data.imgUrl} alt={data.title} />
                  <StDescription>{data.description}</StDescription>
                </Link>
              </div>
            );
          })}
        </StSlider>
      )}
      {isLoading && <SkeletonBanner />}
    </>
  );
};

export default MainBanner;
