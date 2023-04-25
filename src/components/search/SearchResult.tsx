import { searchBarDataState, searchKeywordState } from '@/store/search';
import styled from 'styled-components/macro';
import { useRecoilValue } from 'recoil';
import { getFontStyle, rem } from '@/theme/utils';
import { Link } from 'react-router-dom';

const StTitle = styled.figcaption`
  ${getFontStyle('ParagraphS')};
  color: var(--gray200);

  @media (min-width: 1920px) {
    ${getFontStyle('ParagraphM')};
  }
`;

const StImageContents = styled.div`
  width: 100%;
  height: 100%;
  padding-top: ${rem(30)};
  display: grid;
  align-self: flex-start;
  grid-template-rows: 1;
  grid-template-columns: repeat(3, 1fr);
  gap: ${rem(5)};

  a:nth-child(n + 4) {
    display: none;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    a:nth-child(-n + 5) {
      display: block;
    }
  }

  @media (min-width: 1920px) {
    grid-template-columns: repeat(7, 1fr);
    a:nth-child(n + 1) {
      display: block;
    }
  }
`;

const StListContents = styled.ul`
  padding-top: ${rem(30)};
  li {
    margin-top: ${rem(10)};
  }
  span {
    ${getFontStyle('ParagraphS')};
    color: var(--gray200);
    &:hover {
      color: var(--white);
    }
  }
  @media (min-width: 768px) {
    li:nth-child(n + 0):nth-child(-n + 2) {
      display: none;
    }
  }

  @media (min-width: 1920px) {
    li:nth-child(n + 0):nth-child(-n + 4) {
      display: none;
    }
    span {
      ${getFontStyle('ParagraphM')};
    }
  }
`;

const SearchResult = () => {
  const searchData = useRecoilValue(searchBarDataState);
  const searchKeyword = useRecoilValue(searchKeywordState);

  return (
    <div>
      <StImageContents>
        {searchData?.slice(0, 7).map((data) => {
          return (
            <Link key={data.id} to={`/search?keyword=${searchKeyword}`}>
              <figure>
                <picture>
                  <source srcSet={data.desktopUrl} media="(min-width:1920px)" />
                  <source srcSet={data.tabletUrl} media="(min-width:768px)" />
                  <img src={data.mobileUrl} alt={data.title} />
                </picture>
                <StTitle>{data.title}</StTitle>
              </figure>
            </Link>
          );
        })}
      </StImageContents>
      <StListContents>
        {searchData?.slice(3, 10).map((data) => {
          return (
            <li key={data.id}>
              <Link to={`/search?keyword=${searchKeyword}`}>
                <span>{data.title}</span>
              </Link>
            </li>
          );
        })}
      </StListContents>
    </div>
  );
};

export default SearchResult;
