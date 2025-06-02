type ConditionallyRenderProps = React.PropsWithChildren & {
	skipRender: boolean;
};

export const ConditionallyRender = ({
	skipRender,
	children,
}: ConditionallyRenderProps) => {
	if (skipRender) {
		return null;
	}
	return children;
};
