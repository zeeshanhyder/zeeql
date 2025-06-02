'use client';

import { getData } from '@/store/dataset';
import { useQueryStore } from '@/store/query-store';
import {
	Button,
	Card,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from '@heroui/react';
import { CheckIcon, GearIcon, HouseSimpleIcon } from '@phosphor-icons/react';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { LoaderFull } from '../loader/loader-full';
import { QueryForm } from '../query-form/query-form';
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
	const SelectedGraphCheck = () => {
		if (showVisualization) {
			return <CheckIcon size={16} className="mr-2" weight="bold" />;
		}
		return null;
	};

	return (
		<section className="flex flex-col grow">
			<Card className="flex flex-row h-[50px] shadow-md mb-2" radius="none">
				<Button
					radius="none"
					className="bg-white ml-auto h-[50px]"
					as={Link}
					href="/"
					aria-label="Go to home button"
				>
					<HouseSimpleIcon weight="bold" size={16} />
				</Button>
				<QueryForm defaultValue={filteredQuery?.text} />

				<Dropdown>
					<DropdownTrigger>
						<Button
							radius="none"
							className="bg-white ml-auto h-[50px] w-[25px]"
						>
							<GearIcon size={16} weight="bold" />
						</Button>
					</DropdownTrigger>
					<DropdownMenu aria-label="Additional Options">
						<DropdownItem
							key="new"
							onPress={() => setShowVisualization(!showVisualization)}
							aria-label="Toggle Graph visibility option"
						>
							<div className="flex flex-row items-center">
								<SelectedGraphCheck /> <span>Show Graph</span>
							</div>
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</Card>
			{showVisualization && <Graph />}
			{loading && <LoaderFull />}
			{!loading && data && <QueryTable data={data} />}
		</section>
	);
};
