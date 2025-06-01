'use client';
import { useQueryStore } from '@/store/query-store';
import { fakeId } from '@/utils/fake-id';
import { Button, Form, Input } from '@heroui/react';
import { useRouter } from 'next/navigation';
import type { FormEvent } from 'react';

export const QueryForm = () => {
	const { saveQuery } = useQueryStore();
	const navigation = useRouter();
	const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
		ev.preventDefault();
		ev.stopPropagation();
		const id = fakeId();
		const query = ev.currentTarget.elements.namedItem(
			'name',
		) as HTMLInputElement;
		saveQuery({
			id,
			text: query.value,
		});
		navigation.replace(`/query/${id}`);
	};

	return (
		<Form className="flex flex-row grow" onSubmit={onSubmit}>
			<Input
				isRequired
				errorMessage="Please type in a query"
				name="name"
				placeholder="Type your query. Example: SELECT * FROM table"
				radius="sm"
				size="lg"
				isClearable={true}
				className="flex flex-grow bg-white lg:min-w-[80%]"
			/>
			<Button
				className="min-w-[50px] shadow-sm"
				radius="sm"
				size="lg"
				color="primary"
				type="submit"
			>
				Run Query
			</Button>
		</Form>
	);
};
