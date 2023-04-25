import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useCallback, useMemo, useState } from 'react';
import { db } from './index';

/**
 * Firestore 인증 사용자 데이터 쓰기 훅
 * @param {string} collectionKey 콜렉션 키, 옵션(기본 값: 'users')
 * @returns {{
 *   isLoading: boolean;
 *   error: null | Error;
 *   createAuthUser: (userAuth: import('firebase/auth').UserCredential.user, additionData: {}) => void
 * }}
 */
export function useCreateAuthUser(collectionKey = 'users') {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  let uuid = self.crypto.randomUUID();

  const createAuthUser = useCallback(
    async (userAuth, additionData = {}) => {
      if (!userAuth) {
        return;
      }
      const userDocRef = doc(db, collectionKey, userAuth.uid);
      const profileDocRef = doc(userDocRef, 'profile', uuid);
      setIsLoading(true);

      try {
        const userSnapshot = await getDoc(userDocRef);
        if (!userSnapshot.exists()) {
          const { email, displayName } = userAuth;
          const createAt = serverTimestamp();
          await setDoc(userDocRef, {
            email,
            displayName,
            createAt,
            ...additionData,
          });

          await setDoc(profileDocRef, {
            name: '타잉',
            mobileUrl:
              'https://firebasestorage.googleapis.com/v0/b/together-de6e5.appspot.com/o/profiles%2Fdefaults%2Fprofile4%2Fdesktop%2Fprofile_4.png?alt=media&token=053125f0-3d85-40f7-9983-9f3775854dc3',
          });
        } else {
          throw new ReferenceError(
            '이미 Firestore에 가입 등록된 사용자입니다.'
          );
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [collectionKey]
  );

  return useMemo(
    () => ({ isLoading, error, createAuthUser }),
    [createAuthUser, error, isLoading]
  );
}
