'use client';

import { useQueryStore } from '@/store/query-store';
import { Button, Card, Input } from '@heroui/react';
import Link from 'next/link';

export const QueryResult = ({ queryId }: { queryId: number }) => {
	const { queries } = useQueryStore();
	const filteredQuery = queries.find((query) => query.id === queryId);
	console.log(queries);

	return (
		<section className="flex flex-col grow">
			<Card className="flex flex-row h-[50px] shadow-md" radius="none">
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
					className="font-[monospace] flex min-h-[100px] mt-[8px] pr-5 grow"
					placeholder="Type your query here..."
					value={filteredQuery?.text}
				/>
				<Button
					radius="none"
					color="primary"
					className="ml-auto h-[50px] min-w-[100px] font-mono font-bold text-sm"
				>
					Run Query
				</Button>
			</Card>
		</section>
	);
};
