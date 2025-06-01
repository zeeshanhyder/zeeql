'use client'

import { createContext, PropsWithChildren, useContext, useRef, useState } from "react";

const getLocalStorageQueries = () => {
    if (typeof window === 'undefined') {
        return [];
    }
    const queries = window.localStorage.getItem('queries');
    if (queries) {
        return JSON.parse(queries);
    }
    
    return [];
}
export type Query = {
    id: number;
    name?: string;
    text: string;
}

type QueryProps = {
    queries: Query[];
    saveQuery: (query: Query) => void;
}

const QueryStoreContext = createContext<QueryProps>({
    queries: [],
    saveQuery: () => {},
});

export const QueryStoreProvider = ({ children }: PropsWithChildren) => {
    const queries = useRef<Query[]>(getLocalStorageQueries());
    const saveQuery = (query: Query) => {
        queries.current = [query, ...queries.current];
        localStorage.setItem('queries', JSON.stringify(queries.current));
    }

    return (
        <QueryStoreContext.Provider value={{
            queries: queries.current,
            saveQuery,
        }}>{children}</QueryStoreContext.Provider>
    )
}

export const useQueryStore = () => {
    const queryStore = useContext(QueryStoreContext);
    return queryStore;
}

// fake promise to imitate network load
export const getSpeedDialQueries = (): Promise<Query[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(getLocalStorageQueries());
        }, 1500);
    })
}