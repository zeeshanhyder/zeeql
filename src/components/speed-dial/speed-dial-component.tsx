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
			<h3 className="text-md font-bold">Query Speed Dial</h3>
			{hasQueries && (
				<div className="mt-5 max-h-[300px] overflow-hidden overflow-y-auto">
					{queries.map((query) => (
						<Link key={query.id} href={`/query/${query.id}`}>
							<Card className="p-5 mb-5 shadow-sm text-[var(--color-gray)] text-md">
								{query.text}
							</Card>
						</Link>
					))}
				</div>
			)}
			{!hasQueries && <p className="my-10 text-center">No queries added yet</p>}
		</>
	);
};
