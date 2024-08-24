<script>
	import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';


</script>

<Table shadow>
	<TableHead>
		<TableHeadCell>Ticker</TableHeadCell>
		<TableHeadCell>Average Price</TableHeadCell>
		<TableHeadCell>Shares</TableHeadCell>
	</TableHead>
	<TableBody tableBodyClass="divide-y">
		<TableBodyRow>
			<TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
			<TableBodyCell>Sliver</TableBodyCell>
			<TableBodyCell>Sliver</TableBodyCell>

		</TableBodyRow>
		<TableBodyRow>
			<TableBodyCell>Microsoft Surface Pro</TableBodyCell>
			<TableBodyCell>White</TableBodyCell>
			<TableBodyCell>White</TableBodyCell>
		</TableBodyRow>
		<TableBodyRow>
			<TableBodyCell>Magic Mouse 2</TableBodyCell>
			<TableBodyCell>Black</TableBodyCell>
			<TableBodyCell>Black</TableBodyCell>
		</TableBodyRow>
	</TableBody>
</Table>
