import { doc, updateDoc } from 'firebase/firestore';
import { useCallback, useMemo, useState } from 'react';
import { db } from './index';

/**
 * Firestore 데이터 업데이트 훅
 * @param {string} collectionKey 콜렉션 키 (필수)
 * @returns {{
 *   isLoading: boolean;
 *   error: null | Error;
 *   updateData: (documentKey: string; data: any) => Promise<any>
 * }}
 */
export function useUpdateData(collectionKey: string, documentKey: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);

  if (collectionKey.includes('/') && !documentKey) {
    const collectionAndDocumentKey = collectionKey.split('/');
    collectionKey = collectionAndDocumentKey[0];
    documentKey = collectionAndDocumentKey[1];
  }

  const updateData = useCallback(
    async (data:any, docKey:any) => {
      docKey = docKey ?? documentKey;
      const documentRef = doc(db, collectionKey, docKey);

      setIsLoading(true);

      try {
        await updateDoc(documentRef, data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    },
    [collectionKey, documentKey]
  );

  return useMemo(
    () => ({
      isLoading,
      error,
      updateData,
    }),
    [error, isLoading, updateData]
  );
}
