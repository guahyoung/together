import { useEffect, useState } from 'react';
import Svg from '@/components/svg/Svg';
import { StSearchInput } from '@/styles/SearchBarStyles';
import {
  searchBarDataState,
  searchHistoryState,
  searchKeywordState,
} from '@/store/search/index';
import { useRecoilState, useSetRecoilState } from 'recoil';
import useDebounce from '@/hooks/useDebounce';
import useReadSearchData from '@/firebase/firestore/useReadSearchData';
import Modal from '@/components/modal/Modal';
import { useNavigate } from 'react-router-dom';
import { func } from 'prop-types';
import useModal from '@/hooks/useModal';
import StA11yHidden from '../a11yhidden/A11yHidden';

const SearchBar = ({ openModal }) => {
  const [keywords, setKeywords] = useRecoilState(searchHistoryState);
  const [keyword, setKeyword] = useRecoilState(searchKeywordState);
  const setSearchData = useSetRecoilState(searchBarDataState);
  const [isGuideModal, setIsGuideModal] = useState(false);
  const { toggleModal } = useModal('search');
  const navigate = useNavigate();

  const toggleGuideModal = () => {
    setIsGuideModal((isGuideModal) => !isGuideModal);
  };

  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!keyword) {
      toggleGuideModal();
      return;
    }

    let uuid = self.crypto.randomUUID();
    const newKeyword = {
      id: uuid,
      keyword: keyword,
    };

    if (keywords.length === 10) {
      setKeywords((keywords) => keywords.slice(0, 9));
    }

    setKeywords((keywords) => [newKeyword, ...keywords]);
    setSearchData([]);
    toggleModal();
    navigate(`/search?keyword=${keyword}`);
  };

  const { readSearchData, isLoading, error } = useReadSearchData(
    'programs',
    keyword,
    'searchBarDataState'
  );

  useDebounce(
    () => {
      readSearchData();
    },
    300,
    keyword
  );

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords));
  }, [keywords]);

  return (
    <>
      {isGuideModal && (
        <Modal
          message="검색어를 입력해주세요."
          onClickHandler={toggleGuideModal}
        />
      )}
      <StA11yHidden as="label" htmlFor="search">
        검색 키워드
      </StA11yHidden>
      <StSearchInput>
        <input
          type="text"
          id="search"
          placeholder="TV프로그램, 영화 제목 및 출연진으로 검색해보세요"
          value={keyword || ''}
          onChange={onChangeKeyword}
          onClick={openModal}
          autoFocus
        />
        <button onClick={onSubmitHandler}>
          <Svg
            id="search-hover"
            width={22}
            height={22}
            tabletW={28}
            tabletH={28}
            desktopW={50}
            desktopH={50}
          />
        </button>
      </StSearchInput>
    </>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  openModal: func,
};
