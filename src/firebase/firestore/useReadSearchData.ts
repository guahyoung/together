import { useCallback, useMemo, useState } from 'react';
import { dbService } from '@/firebase/app';
import { useSetRecoilState } from 'recoil';
import {
  searchDataState,
  searchBarDataState,
} from '@/store/search/searchDataState';

const useReadSearchData = (collectionKey, keyword, atomState) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const setData = useSetRecoilState(
    atomState === 'searchDataState' ? searchDataState : searchBarDataState
  );

  const readSearchData = useCallback(async () => {
    setData([]);
    if (!keyword) return;
    setIsLoading(true);

    try {
      const collectionRef = dbService.collection(collectionKey);
      const snapshot = await collectionRef
        .where('title', '>=', keyword)
        .where('title', '<=', keyword + '\uf8ff')
        .get();
      snapshot.forEach((doc) =>
        setData((data) => [...data, { ...doc.data() }])
      );
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [collectionKey, keyword, setData]);
  return useMemo(
    () => ({
      isLoading,
      error,
      readSearchData,
    }),
    [readSearchData, error, isLoading]
  );
};

export default useReadSearchData;
