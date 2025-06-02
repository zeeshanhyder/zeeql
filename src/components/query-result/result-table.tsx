import { type DataSet, type DataSetkey, getDataColumns } from '@/store/dataset';
import {
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from '@heroui/react';

export default function QueryResultTable({ data }: { data: DataSet[] }) {
	const columns = getDataColumns();

	return (
		<Table
			isVirtualized
			aria-label="Query results table"
			maxTableHeight={800}
			shadow="none"
			radius="none"
			rowHeight={40}
			isStriped
			inert
		>
			<TableHeader columns={columns}>
				{(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
			</TableHeader>
			<TableBody items={data}>
				{(item) => (
					<TableRow key={item.customerID}>
						{(columnKey) => (
							<TableCell>{item[columnKey as DataSetkey]}</TableCell>
						)}
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
}
