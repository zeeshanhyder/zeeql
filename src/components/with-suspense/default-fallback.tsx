'use client';

import { Card, Skeleton } from '@heroui/react';

export default function DefaultFallback() {
	return (
		<Card className="w-full space-y-5 p-4" radius="lg">
			<Skeleton className="rounded-lg">
				<div className="h-10 rounded-lg bg-default-500" />
			</Skeleton>
			<Skeleton className="rounded-lg">
				<div className="h-10 rounded-lg bg-default-500" />
			</Skeleton>
			<Skeleton className="rounded-lg">
				<div className="h-10 rounded-lg bg-default-500" />
			</Skeleton>
		</Card>
	);
}
