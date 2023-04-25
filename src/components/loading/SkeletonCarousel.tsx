import {
  StImageBox,
  StImageBoxGroup,
  StTextBox,
} from '@/styles/SkeletonStyles';

const SkeletonCarousel = () => {
  return (
    <>
      <StTextBox />
      <StImageBoxGroup>
        <StImageBox />
        <StImageBox />
        <StImageBox />
        <StImageBox />
        <StImageBox />
      </StImageBoxGroup>
    </>
  );
};

export default SkeletonCarousel;
