'use client';
import { getSpeedDialQueries } from '@/store/query-store';
import { useQuery } from '../use-query/use-query';
import DefaultFallback from '../with-suspense/default-fallback';
import { SpeedDialQueriesComponent } from './speed-dial-component';

export const SpeedDialQueriesLoader = () => {
	const { data, loading } = useQuery(getSpeedDialQueries);
	if (loading) {
		return <DefaultFallback />;
	}

	if (data) {
		return <SpeedDialQueriesComponent queries={data} />;
	}
};

export const SpeedDialQueries = () => {
	return (
		<div className="min-h-[300px]">
			<h3 className="text-md font-bold mt-15 mb-5">Frequently Used Queries</h3>
			<SpeedDialQueriesLoader />
		</div>
	);
};
