import {
  collection,
  onSnapshot,
  query,
  doc,
  DocumentSnapshot,
  QuerySnapshot,
  Unsubscribe,
} from 'firebase/firestore';
import { useLayoutEffect, useMemo, useState } from 'react';
import { db } from './index';

interface DataState {
  data: undefined | null;
  error: Error | null;
}

export function useDataState(
  collectionKey: string,
  documentKey?: string
): DataState {
  const [data, setData] = useState<null | undefined>(null);
  const [error, setError] = useState<null | Error>(null);

  if (collectionKey.includes('/') && !documentKey) {
    const collectionAndDocumentKey = collectionKey.split('/');
    collectionKey = collectionAndDocumentKey[0];
    documentKey = collectionAndDocumentKey[1];
  }

  useLayoutEffect(() => {
    let unsubscribe: Unsubscribe;

    if (documentKey) {
      const documentRef = doc(db, collectionKey, documentKey);

      unsubscribe = onSnapshot(
        documentRef,
        (snapshot: DocumentSnapshot) => {
          setData(snapshot.data());
        },
        (error: Error) => {
          setError(error);
        }
      );
    } else {
      const collectionRef = collection(db, collectionKey);

      unsubscribe = onSnapshot(
        collectionRef,
        (Snapshot: QuerySnapshot) => {
          const data : DataState[] = [];
          Snapshot.forEach((doc) => {
            data.push(doc.data());
          });
          setData(data);
        },
        (error: Error) => {
          setError(error);
        }
      );
    }

    return unsubscribe;
  }, [collectionKey, documentKey]);


  return useMemo(() => ({ data, error }), [data, error]) as DataState;
}
