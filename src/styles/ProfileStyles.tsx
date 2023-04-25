import styled from 'styled-components/macro';
import { getFontStyle, rem } from '@/theme/utils';

export const StProfileTitle = styled.h2`
  ${getFontStyle('headingM')};
  text-align: center;
  margin-top: ${rem(122)};
  @media (min-width: 768px) {
    ${getFontStyle('headingXL')};
    margin-top: ${rem(130)};
  }
  @media (min-width: 1920px) {
    ${getFontStyle('headingXXL')};
    margin-top: ${rem(130)};
  }
`;

export const StProfileSubTitle = styled.h3`
  ${getFontStyle('LabelS')};
  text-align: center;
  margin: ${rem(16)} ${rem(0)};
  color: var(--gray200);
  @media (min-width: 768px) {
    ${getFontStyle('LabelM')};
    margin-top: ${rem(8)};
  }
  @media (min-width: 1920px) {
    ${getFontStyle('LabelXL')};
    margin-top: ${rem(20)};
  }
`;

export const StProfileItems = styled.ul`
  display: flex;
  flex-flow: row wrap;
  width: ${rem(252)};
  height: auto;
  margin-top: ${rem(20)};
  margin-left: auto;
  margin-right: auto;
  justify-content: ${(props) => {
    props.children.length > 3 ? 'space-between' : 'space-evenly';
  }};
  align-self: center;
  @media (min-width: 768px) {
    gap: ${rem(15)};
    width: ${rem(600)};
    padding-top: ${rem(20)};
  }
  @media (min-width: 1920px) {
    gap: ${rem(25)};
    width: ${rem(1200)};
    padding-top: ${rem(30)};
  }
  li {
    margin-left: auto;
    margin-right: auto;
    width: ${rem(114)};
    margin-top: ${rem(16)};
    @media (min-width: 768px) {
      width: ${rem(132)};
      margin: 0;
    }
    @media (min-width: 1920px) {
      width: ${rem(234)};
    }
    p {
      ${getFontStyle('ParagraphS')};
      text-align: center;
      width: ${rem(114)};
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-top: ${rem(3)};
      color: var(--gray300);
      @media (min-width: 768px) {
        ${getFontStyle('ParagraphM')};
        width: ${rem(132)};
        margin-top: ${rem(6)};
      }
      @media (min-width: 1920px) {
        ${getFontStyle('ParagraphXL')};
        width: ${rem(234)};
        margin-top: ${rem(16)};
      }
    }
  }
`;

export const StProfileItem = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  aspect-ratio: auto 1/1;
  border-radius: 4px;
  object-fit: cover;
  text-align: center;
  margin: 0 auto;
`;

export const StProfileSvg = styled.div`
  background: var(--gray700);
  width: 100%;
  aspect-ratio: auto 1/1;
  display: inline-flex;
  cursor: pointer;
  &:hover {
    border: 2px solid var(--white);
  }
`;
export const StSvg = styled.div`
  display: block;
  margin: auto;
  svg {
    scale: 100%;
  }
  @media (min-width: 768px) {
    scale: 150%;
  }
  @media (min-width: 1920px) {
    scale: 200%;
  }
`;

export const StProfileImage = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:hover {
    border: 2px solid var(--white);
  }
`;

export const StProfileEditImage = styled.img`
  position: absolute;
  opacity: 0.3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:hover {
    border: 4px solid var(--primary);
  }
`;

export const StProfileButton = styled.button`
  display: block;
  width: ${rem(114)};
  height: ${rem(34)};
  margin: ${rem(3)} auto 0 auto;
  color: var(--gray300);
  background-color: var(--black);
  border: 1px solid var(--gray600);
  border-radius: 4px;
  ${getFontStyle('LabelS')};
  @media (min-width: 768px) {
    width: ${rem(132)};
    height: ${rem(38)};
    margin-top: ${rem(6)};
  }
  @media (min-width: 1920px) {
    width: ${rem(234)};
    height: ${rem(60)};
    margin-top: ${rem(15)};
    ${getFontStyle('LabelL')};
  }
  &:hover {
    background-color: var(--primary);
    color: var(--white);
    border: none;
  }
`;

export const StProfileInput = styled.input`
  padding: ${rem(16)};
  margin-top: ${rem(20)};
  border: none;
  border-radius: 4px;
  background-color: var(--dark-bg2);
  color: var(--white);
  width: 100%;
  height: 50%;
  ${getFontStyle('ParagraphM')};
  @media (min-width: 768px) {
    ${getFontStyle('ParagraphL')};
  }
  @media (min-width: 1920px) {
    ${getFontStyle('ParagraphXL')};
  }

  &:hover {
    border: 1px solid;
  }
`;
export const StProfileEditButton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  background-color: var(--black);
  opacity: 0.5;
  @media (min-width: 768px) {
    width: ${rem(148)};
    height: ${rem(148)};
  }
  @media (min-width: 1920px) {
    width: ${rem(226)};
    height: ${rem(226)};
  }
  button {
    width: 100%;
    height: 100%;
    display: block;
    background-color: transparent;
    border: none;
    margin: auto;
  }
`;

export const StDeleteButton = styled.button`
  width: ${rem(100)};
  height: ${rem(20)};
  ${getFontStyle('LabelS')}
  display: block;
  margin-top: ${rem(20)};
  margin-left: auto;
  margin-right: auto;
  border: none;
  background-color: transparent;
  color: var(--gray300);
  text-decoration: underline;
  @media (min-width: 768px) {
    width: ${rem(130)};
    height: ${rem(30)};
    ${getFontStyle('LabelM')}
  }
  @media (min-width: 1920px) {
    width: ${rem(200)};
    height: ${rem(45)};
    ${getFontStyle('LabelXL')}
  }
`;
