/* eslint-disable jsx-a11y/anchor-is-valid */
import { getFontStyle, rem } from '@/theme/utils';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import Svg from '@/components/svg/Svg';

const StFooter = styled.footer`
  color: var(--gray500);
  margin-top: ${rem(80)};
  padding: ${rem(10)} ${rem(12)};
  ${getFontStyle('ParagraphS')};
  @media (min-width: 768px) {
    padding: ${rem(16)} ${rem(40)};
    ${getFontStyle('ParagraphS')};
  }
  @media (min-width: 1920px) {
    padding: ${rem(29)} ${rem(70)};
    ${getFontStyle('ParagraphM')};
  }
`;
const StContainer = styled.div`
  border-top: 1px solid var(--gray800);
  padding-top: ${rem(13)};
  padding-bottom: ${rem(100)};
`;

const StUtil = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(10)};
  @media (min-width: 768px) {
    flex-direction: row;
    gap: ${rem(20)};
    ${getFontStyle('ParagraphM')};
  }
  @media (min-width: 1920px) {
    flex-direction: row;
    gap: ${rem(36)};
    ${getFontStyle('ParagraphL')};
  }
`;

const StUtilLink = styled(Link)`
  width: fit-content;
  color: var(--gray200);
  text-decoration: none;
  &:hover {
    color: var(--white);
    text-decoration: underline;
  }
`;

const StCopyrightUl = styled.ul`
  margin-top: ${rem(12)};
  display: none;
  color: var(--gray400);
  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 1920px) {
    display: block;
  }
`;

const StLink = styled(Link)`
  text-decoration: underline;
  &:hover {
    color: var(--gray300);
  }
`;

const StCopyrightli = styled.li`
  span:after {
    content: '';
    border: 1px solid;
    color: var(--gray800);
    margin: 0 ${rem(8)};
  }
  span:last-child::after {
    content: none;
  }
`;

const StIconBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${rem(20)};
  margin-top: ${rem(12)};
  svg {
    cursor: pointer;
  }
  svg:hover {
    color: var(--gray200);
  }
`;

const StCopyright = styled.p`
  margin-top: ${rem(12)};
  color: var(--gray400);
`;

const Footer = () => {
  return (
    <StFooter>
      <StContainer>
        <StUtil>
          <StUtilLink to="/main">고객센터</StUtilLink>

          <StUtilLink to="/main">이용약관</StUtilLink>

          <StUtilLink to="/main">개인정보처리방침</StUtilLink>

          <StUtilLink to="/main">청소년 보호정책</StUtilLink>

          <StUtilLink to="/main">법적고지</StUtilLink>

          <StUtilLink to="/main">인재채용</StUtilLink>
        </StUtil>
        <StCopyrightUl>
          <StCopyrightli>
            <span>대표이사 : YANG JIEUL</span>
            <span>
              <StLink>사업자정보확인</StLink>
            </span>
            <span>사업자등록번호 : 188-88-01893</span>
            <span>통신판매신고번호 : 2020-서울마포-3641호</span>
          </StCopyrightli>
          <StCopyrightli>
            <span>
              사업장 : 서울특별시 마포구 상암산로 34, DMC디지털큐브 15층(상암동)
            </span>
            <span>호스팅사업자 : 씨제이올리브네트웍스(주)</span>
          </StCopyrightli>
          <StCopyrightli>
            <span>
              <StLink>고객문의 바로가기</StLink>
            </span>
            <span>대표메일 : tving@cj.net</span>
            <span>고객센터 : 1670-1525 (평일/주말 09시~18시, 공휴일 휴무)</span>
          </StCopyrightli>
          <StCopyrightli>
            <span>
              ENM 시청자 상담실(편성 문의 및 시청자 의견) : 080-080-0780
            </span>
            <span>Mnet 고객센터(방송송편성문의) : 1855-1631</span>
          </StCopyrightli>
        </StCopyrightUl>
        <StIconBox>
          <Svg
            id="youtube"
            width={24}
            height={24}
            tabletW={30}
            tabletH={30}
            desktopW={38}
            desktopH={38}
            aria-label="타잉 유튜브"
          />
          <Svg
            id="instagram"
            width={24}
            height={24}
            tabletW={30}
            tabletH={30}
            desktopW={38}
            desktopH={38}
            aria-label="타잉 인스타그램"
          />
          <Svg
            id="twitter"
            width={24}
            height={24}
            tabletW={30}
            tabletH={30}
            desktopW={38}
            desktopH={38}
            aria-label="타잉 트위터"
          />
          <Svg
            id="facebook"
            width={24}
            height={24}
            tabletW={30}
            tabletH={30}
            desktopW={38}
            desktopH={38}
            aria-label="타잉 페이스북"
          />
        </StIconBox>
        <StCopyright>
          <small>Copyright Ⓒ 주식회사 티빙 All right reserved</small>
        </StCopyright>
      </StContainer>
    </StFooter>
  );
};

export default Footer;
