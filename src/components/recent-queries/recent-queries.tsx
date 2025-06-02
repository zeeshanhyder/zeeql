'use client';

import { type Query, useQueryStore } from '@/store/query-store';
import { ClockCounterClockwiseIcon } from '@phosphor-icons/react';
import React, { useEffect, useState } from 'react';
import { ConditionallyRender } from '../conditionally-render/conditionally-render';
import { QueriesListComponent } from '../queries-list-component/queries-list-component';

export const RecentQueries = () => {
	const { queries } = useQueryStore();
	const [recentQueries, setRecentQueries] = useState<Query[]>([]);
	const [hasQueries, setHasQueries] = useState(false);

	useEffect(() => {
		setRecentQueries(() => {
			let lastIndex = queries.length - 1;
			lastIndex = lastIndex > 3 ? 3 : lastIndex - 1;
			const updatedRecentQueries = queries.slice(0, lastIndex);
			setHasQueries(updatedRecentQueries.length >= 1 && queries.length > 2);
			return updatedRecentQueries;
		});
	}, []);

	return (
		<ConditionallyRender skipRender={!hasQueries}>
			<div className="max-h-[300px]">
				<h3 className="text-md font-bold mt-15 mb-5">Recent Queries</h3>
				<QueriesListComponent
					icon={<ClockCounterClockwiseIcon size={16} />}
					queries={recentQueries}
				/>
			</div>
		</ConditionallyRender>
	);
};
