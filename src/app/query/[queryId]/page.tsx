type EditorProps = {
	params: Promise<{
		queryId: string;
	}>;
};

export default async function Editor(props: EditorProps) {
	const { queryId } = await props.params;
	return <div>Editor {queryId}</div>;
}
