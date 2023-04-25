import { useEffect } from 'react';
import styled from 'styled-components/macro';
import { rem } from '@/theme/utils';
import SearchBar from '@/components/search/SearchBar';
import SearchHistory from '@/components/search/SearchHistory';
import SearchPopular from '@/components/search/SearchPopular';
import { func } from 'prop-types';
import { searchBarDataState, searchKeywordState } from '@/store/search/index';
import { useRecoilValue } from 'recoil';
import SearchResult from '@/components/search/SearchResult';
import useModal from '@/hooks/useModal';

const StSearchModal = styled.div`
  overflow-y: auto;
  ::-webkit-scrollbar {
    background: var(--dark-bg1);
  }
  background-color: var(--dark-bg1);
  color: var(--white);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100vh;
  padding: ${rem(58)} ${rem(47)};
  z-index: 2;
  @media (min-width: 768px) {
    padding: ${rem(84)} ${rem(122)} ${rem(52)} ${rem(122)};
  }

  @media (min-width: 1920px) {
    padding: ${rem(152)} ${rem(220)} ${rem(93)} ${rem(220)};
  }
`;

const StSearchModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const StSearchContent = styled.div`
  margin-top: ${rem(40)};
  @media (min-width: 786px) {
    margin-top: ${rem(48)};
  }
  @media (min-width: 1920px) {
    margin-top: ${rem(98)};
  }
`;

const StKeyword = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const SearchModal = () => {
  const { closeModal } = useModal('search');
  const searchData = useRecoilValue(searchBarDataState);
  const searchKeyword = useRecoilValue(searchKeywordState);

  useEffect(() => {
    document.body.style.cssText = `
    overflow:hidden;`;
    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, []);
  return (
    <>
      <StSearchModalOverlay onClick={closeModal} />
      <StSearchModal>
        <SearchBar />
        {(searchKeyword.length === 0 || searchData.length === 0) && (
          <StSearchContent>
            <StKeyword>
              <SearchHistory />
              <SearchPopular />
            </StKeyword>
          </StSearchContent>
        )}
        {searchData.length > 0 && <SearchResult />}
      </StSearchModal>
    </>
  );
};

export default SearchModal;

SearchModal.propTypes = {
  toggleModal: func,
};
