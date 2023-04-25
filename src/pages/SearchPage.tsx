import { useEffect } from 'react';
import styled from 'styled-components/macro';
import { getFontStyle, rem } from '@/theme/utils';
import { useSearchParams } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  countSearchDataState,
  searchKeywordState,
  searchTvProgramsState,
  searchMoviesState,
} from '@/store/search/index';
import useModal from '@/hooks/useModal';
import Carousel from '@/components/carousel/Carousel';
import useReadSearchData from '@/firebase/firestore/useReadSearchData';
import { StSearchInput } from '@/styles/SearchBarStyles';
import Svg from '@/components/svg/Svg';
import SkeletonCarousel from '@/components/loading/SkeletonCarousel';
import { Helmet } from 'react-helmet-async';

const StLayout = styled.div`
  margin-top: ${rem(38)};
  padding: ${rem(20)} ${rem(47)} 0;
  @media (min-width: 768px) {
    padding: ${rem(28)} ${rem(122)} 0;
    margin-top: ${rem(56)};
  }
  @media (min-width: 1920px) {
    padding: ${rem(52)} ${rem(158)} 0;
    margin-top: ${rem(100)};
  }
`;

const StMessage = styled.p`
  text-align: center;
  margin-top: ${rem(50)};
  ${getFontStyle('ParagraphXL')};
`;

const StCarouselLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(30)};
`;

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const countSearchData = useRecoilValue(countSearchDataState);
  const tvPrograms = useRecoilValue(searchTvProgramsState);
  const movies = useRecoilValue(searchMoviesState);
  const [searchKeyword, setSearchKeyword] = useRecoilState(searchKeywordState);

  const { openModal } = useModal('search');

  const { readSearchData, isLoading, error } = useReadSearchData(
    'programs',
    searchParams.get('keyword'),
    'searchDataState'
  );

  useEffect(() => {
    setSearchKeyword(searchParams.get('keyword'));
    readSearchData();
  }, [searchParams.get('keyword')]);

  const resultMessage = `'${searchParams.get(
    'keyword'
  )}' 검색 결과가 ${countSearchData}개
        있습니다.`;

  const noMessage = `'${searchParams.get('keyword')}' 검색 결과가 없습니다.`;

  return (
    <>
      <Helmet>
        <title>타잉 검색</title>
        <meta
          name="description"
          content="타잉의 컨텐츠들을 검색할 수 있는 페이지 입니다."
        />
      </Helmet>
      <StLayout>
        <StSearchInput onClick={openModal} onFocus={openModal}>
          <input
            type="text"
            placeholder="TV프로그램, 영화 제목 및 출연진으로 검색해보세요"
            value={searchParams.get('keyword') || ''}
            readOnly
          />
          <Svg
            id="search-hover"
            width={22}
            height={22}
            tabletW={28}
            tabletH={28}
            desktopW={50}
            desktopH={50}
          />
        </StSearchInput>
      </StLayout>
      <StMessage>{countSearchData > 0 ? resultMessage : noMessage}</StMessage>
      <StCarouselLayout>
        {tvPrograms.length > 0 && (
          <Carousel title="TV프로그램" dataProp={tvPrograms} />
        )}
        {movies.length > 0 && <Carousel title="영화" dataProp={movies} />}
        {isLoading && <SkeletonCarousel />}
      </StCarouselLayout>
    </>
  );
};

export default SearchPage;
