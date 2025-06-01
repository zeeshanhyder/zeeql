'use client';

import { DataSet, getData } from '@/store/dataset';
import { useQueryStore } from '@/store/query-store';
import { Button, Card, Input } from '@heroui/react';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { LoaderFull } from '../loader/loader-full';
import { useQuery } from '../use-query/use-query';
import { Graph } from './graph';
import QueryTable from './result-table';

export const QueryResult = ({ queryId }: { queryId: number }) => {
	const { queries } = useQueryStore();
	const shouldReturnLargeData = queryId === 1; //queryId === 1 fetches large data for demo purposes
	const { data, loading } = useQuery(() => getData(shouldReturnLargeData));
	const [showVisualization, setShowVisualization] = useState(false);
	const filteredQuery = useMemo(() => {
		return queries.find((query) => query.id === queryId);
	}, [queryId]);
	const showGraphLabel = showVisualization ? 'Hide Graph' : 'Show Graph';

	return (
		<section className="flex flex-col grow">
			<Card className="flex flex-row h-[50px] shadow-md mb-2" radius="none">
				<Button
					radius="none"
					className="bg-white ml-auto h-[50px]"
					as={Link}
					href="/"
				>
					<b>Back</b>
				</Button>
				<Input
					isClearable
					classNames={{ input: 'font-bold text-[var(--color-gray)] text-md' }}
					color="secondary"
					autoFocus
					variant="underlined"
					radius="none"
					className="font-[monospace] flex mt-[8px] pr-5 grow"
					placeholder="Type your query"
					defaultValue={filteredQuery?.text}
				/>
				<Button
					radius="none"
					color="primary"
					className="ml-auto h-[50px] w-[150px] font-mono font-bold text-sm"
				>
					Run Query
				</Button>
				<Button
					radius="none"
					className="bg-white ml-auto h-[50px] w-[150px]"
					onPress={() => setShowVisualization(!showVisualization)}
				>
					<b>{showGraphLabel}</b>
				</Button>
			</Card>
			{showVisualization && <Graph />}
			{loading && <LoaderFull />}
			{!loading && data && <QueryTable data={data} />}
		</section>
	);
};
