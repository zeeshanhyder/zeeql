import { QueryResult } from '@/components/query-result/query-result';

type EditorProps = {
	params: Promise<{
		queryId: string;
	}>;
};

export default async function Editor(props: EditorProps) {
	const { queryId } = await props.params;
	return <QueryResult queryId={Number(queryId)} />;
}
