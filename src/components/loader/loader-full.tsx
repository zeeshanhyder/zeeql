import { Spinner } from '@heroui/react';

export const LoaderFull = () => {
	return (
		<div className="flex flex-col justify-center items-center grow">
			<Spinner />
		</div>
	);
};
