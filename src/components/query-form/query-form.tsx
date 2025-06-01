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
		navigation.push(`/query/${id}`);
	};

	return (
		<Form className="flex flex-row grow items-end" onSubmit={onSubmit}>
			<Input
				isRequired
				errorMessage="Please type in a query"
				name="name"
				placeholder="Type your query"
				size="lg"
				isClearable
				classNames={{ input: 'font-bold text-[var(--color-gray)] text-md' }}
				color="secondary"
				autoFocus
				variant="underlined"
				radius="none"
				className="font-[monospace] mt-[8px] pr-5 grow"
			/>
			<Button
				className="min-w-[50px] shadow-sm font-mono font-bold text-sm"
				radius="none"
				size="lg"
				color="primary"
				type="submit"
			>
				Run Query
			</Button>
		</Form>
	);
};
