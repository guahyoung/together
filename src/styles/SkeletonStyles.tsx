import { rem } from '@/theme/utils';
import styled from 'styled-components/macro';

export const SkeletonAnimation = styled.div`
  background: linear-gradient(
    120deg,
    var(--dark-bg1) 30%,
    var(--dark-bg2) 38%,
    var(--dark-bg2) 40%,
    var(--dark-bg1) 48%
  );

  border-radius: 5px;
  background-size: 200% 100%;
  background-position: 100% 0;
  animation: skeleton-gradient 1s infinite;

  @keyframes skeleton-gradient {
    100% {
      background-position: -100% 0;
    }
  }
`;

export const StBanner = styled(SkeletonAnimation)`
  width: 100%;
  height: 40vh;
`;

export const StTextBox = styled(SkeletonAnimation)`
  margin-left: 2%;
  margin-right: 2%;
  width: 40%;
  height: ${rem(30)};
  margin-top: 1rem;
`;

export const StImageBoxGroup = styled.div`
  display: flex;
  flex-grow: row wrap;
  margin-top: 1rem;
`;

export const StImageBox = styled(SkeletonAnimation)`
  width: 18%;
  aspect-ratio: auto 1/1.5;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
`;
