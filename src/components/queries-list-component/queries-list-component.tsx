'use client';
import type { Query } from '@/store/query-store';
import { Card } from '@heroui/react';
import Link from 'next/link';
import { ConditionallyRender } from '../conditionally-render/conditionally-render';

type QueriesListProps = {
	queries: Query[];
	icon?: React.JSX.Element;
};

export const QueriesListComponent = ({ queries, icon }: QueriesListProps) => {
	const hasQueries = queries.length > 0;

	return (
		<>
			<ConditionallyRender skipRender={!hasQueries}>
				<div className="mt-5 px-2 max-h-[300px] overflow-hidden overflow-y-auto">
					{queries.map((query) => (
						<Link key={query.id} href={`/query/${query.id}`}>
							<Card
								radius="none"
								className="p-3 mb-2 shadow-md text-[var(--color-gray)] text-sm flex flex-row items-center"
							>
								{icon} <span className="ml-5">{query.name ?? query.text}</span>
							</Card>
						</Link>
					))}
				</div>
			</ConditionallyRender>
			<ConditionallyRender skipRender={hasQueries}>
				<p className="my-10 text-center">No queries added yet</p>
			</ConditionallyRender>
		</>
	);
};
