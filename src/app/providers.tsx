import { QueryStoreProvider } from '@/store/query-store';
import type { PropsWithChildren } from 'react';

export default function Providers({ children }: PropsWithChildren) {
	return <QueryStoreProvider>{children}</QueryStoreProvider>;
}
