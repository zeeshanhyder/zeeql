'use client';
import type { Query } from '@/store/query-store';
import { Card } from '@heroui/react';
import Link from 'next/link';

type SpeedDialQueriesProps = {
	queries: Query[];
};

export const SpeedDialQueriesComponent = ({
	queries,
}: SpeedDialQueriesProps) => {
	const hasQueries = queries.length > 0;

	return (
		<>
			{hasQueries && (
				<div className="mt-5 max-h-[300px] overflow-hidden overflow-y-auto">
					{queries.map((query) => (
						<Link key={query.id} href={`/query/${query.id}`}>
							<Card className="p-5 mb-2 shadow-md text-[var(--color-gray)] text-md">
								{query.name ?? query.text}
							</Card>
						</Link>
					))}
				</div>
			)}
			{!hasQueries && <p className="my-10 text-center">No queries added yet</p>}
		</>
	);
};
