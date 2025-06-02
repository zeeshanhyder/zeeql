'use client';

import {
	type PropsWithChildren,
	createContext,
	useContext,
	useState,
} from 'react';

const DEFAULT_QUERIES: Query[] = [
	{
		id: 1,
		text: 'SELECT * FROM table WHERE true',
		name: 'Get all data from table (large query)',
	},
	{ id: 2, text: 'SELECT DISTINCT FROM table', name: 'Get unique data' },
];

const getLocalStorageQueries = () => {
	if (typeof window === 'undefined') {
		return DEFAULT_QUERIES;
	}
	const storedQueries = window.localStorage.getItem('queries');
	if (storedQueries) {
		return JSON.parse(storedQueries);
	}
	return DEFAULT_QUERIES;
};

export type Query = {
	id: number;
	name?: string;
	text: string;
};

type QueryProps = {
	queries: Query[];
	saveQuery: (query: Query) => void;
};

const QueryStoreContext = createContext<QueryProps>({
	queries: [],
	saveQuery: () => {},
});

export const QueryStoreProvider = ({ children }: PropsWithChildren) => {
	const [, setQuery] = useState<Query[]>(getLocalStorageQueries());
	const saveQuery = (query: Query) => {
		setQuery((prevState) => {
			const latestQueries = [query, ...prevState];
			localStorage.setItem('queries', JSON.stringify(latestQueries));
			return latestQueries;
		});
	};

	return (
		<QueryStoreContext.Provider
			value={{
				queries: getLocalStorageQueries(),
				saveQuery,
			}}
		>
			{children}
		</QueryStoreContext.Provider>
	);
};

export const useQueryStore = () => {
	const queryStore = useContext(QueryStoreContext);
	return queryStore;
};

// fake promise to imitate network load time
export const getSpeedDialQueries = (): Promise<Query[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(DEFAULT_QUERIES);
		}, 1500);
	});
};
