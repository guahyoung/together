import styled from 'styled-components/macro';
import { getFontStyle, rem } from '@/theme/utils';
import Svg from '@/components/svg/Svg';
import { useRecoilState } from 'recoil';
import { searchHistoryState } from '@/store/search/index';
import { useNavigate } from 'react-router-dom';
import useModal from '@/hooks/useModal';

const StRecent = styled.div`
  width: 50%;
  padding-right: ${rem(30)};
  border-right: 1px solid var(--gray800);

  button {
    border: 0;
    background-color: transparent;
    ${getFontStyle('LabelS')};
  }

  div:first-child {
    display: flex;
    flex-direction: column;
    gap: ${rem(12)};
  }

  h2 {
    ${getFontStyle('LabelM')};
    color: var(--gray200);
  }

  ul {
    padding-top: ${rem(16)};
    color: var(--gray300);
  }

  li {
    margin-top: ${rem(8)};
    display: flex;
    align-items: center;
    gap: ${rem(16)};
    ${getFontStyle('ParagraphS')};
  }

  @media (min-width: 768px) {
    div:first-child {
      flex-direction: row;
      align-items: center;
      gap: ${rem(24)};
    }
  }

  @media (min-width: 1920px) {
    height: ${rem(613)};

    h2 {
      ${getFontStyle('LabelXL')};
    }

    ul {
      padding-top: ${rem(4)};
    }

    li {
      margin-top: ${rem(16)};
      ${getFontStyle('ParagraphL')};
    }

    button {
      ${getFontStyle('LabelL')};
    }
  }
`;

const StRemoveAll = styled.button`
  color: var(--gray600);
  display: flex;
  align-items: center;
  gap: ${rem(4)};

  @media (min-width: 1920px) {
    gap: ${rem(12)};
  }
`;

const StRemove = styled.button`
  display: flex;
  align-items: center;
`;

const StKeyword = styled.button`
  color: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &:hover {
    color: var(--white);
  }
`;

const SearchHistory = () => {
  const [keywords, setKeywords] = useRecoilState(searchHistoryState);
  const { toggleModal } = useModal('search');
  const navigate = useNavigate();

  const removeKeyword = (id) => {
    setKeywords((keywords) => keywords.filter((keyword) => keyword.id !== id));
  };

  const removeKeywordAll = () => {
    setKeywords([]);
  };

  const searchKeyword = (keyword) => {
    toggleModal();
    navigate(`/search?keyword=${keyword}`);
  };

  return (
    <StRecent>
      <div>
        <h2>최근 검색어</h2>
        {keywords.length > 0 && (
          <StRemoveAll type="button" onClick={removeKeywordAll}>
            모두 지우기
            <Svg
              id="delete-filled"
              desktopW={20}
              desktopH={20}
              width={12}
              height={12}
            />
          </StRemoveAll>
        )}
      </div>
      <ul>
        {keywords.length === 0 && <li>검색 내역이 없습니다.</li>}
        {keywords?.map((keyword) => (
          <li key={keyword.id}>
            <StKeyword
              type="button"
              onClick={() => searchKeyword(keyword.keyword)}
            >
              {keyword.keyword}
            </StKeyword>
            <StRemove
              type="button"
              aria-label="삭제"
              onClick={() => removeKeyword(keyword.id)}
            >
              <Svg
                id="delete-not-filled"
                desktopW={20}
                desktopH={20}
                width={12}
                height={12}
              />
            </StRemove>
          </li>
        ))}
      </ul>
    </StRecent>
  );
};

export default SearchHistory;
