'use client';
import { useQueryStore } from '@/store/query-store';
import { fakeId } from '@/utils/fake-id';
import { Button, Form, Input } from '@heroui/react';
import { ArrowsCounterClockwiseIcon } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import { type FormEvent, useState } from 'react';

const SubmitButton = ({ isLoading }: { isLoading: boolean }) => {
	return (
		<Button
			className="min-w-[50px] shadow-sm font-mono font-bold text-sm"
			radius="none"
			size="lg"
			color="primary"
			type="submit"
			aria-label="Run Query button"
			isLoading={isLoading}
		>
			<div className="flex flex-row items-center">
				<ArrowsCounterClockwiseIcon size={16} weight="bold" />
				<span className="ml-2">Run Query</span>
			</div>
		</Button>
	);
};

type QueryFormProps = {
	defaultValue?: string;
	onSubmit?: (ev: FormEvent<HTMLFormElement>) => void;
};

export const QueryForm = ({ defaultValue, onSubmit }: QueryFormProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const { saveQuery } = useQueryStore();
	const navigation = useRouter();
	const onSubmitAction = (ev: FormEvent<HTMLFormElement>) => {
		setIsLoading(true);
		ev.preventDefault();
		ev.stopPropagation();
		const id = fakeId();
		const text = ev.currentTarget.elements.namedItem(
			'name',
		) as HTMLInputElement;
		saveQuery({
			id,
			text: text.value,
		});

		setTimeout(() => {
			navigation.push(`/query/${id}`);
			setIsLoading(false);
		}, 1500);
	};

	return (
		<Form
			className="flex flex-row grow items-end"
			onSubmit={onSubmit ?? onSubmitAction}
		>
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
				defaultValue={defaultValue}
			/>
			<SubmitButton isLoading={isLoading} />
		</Form>
	);
};
