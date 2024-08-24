<script>
	import { Button, Dropdown, Input, Label, Search } from 'flowbite-svelte';
	import { CheckOutline, ChevronDownOutline } from 'flowbite-svelte-icons';

	/** @type {import('./$houdini').PageData} */
	export let data
	$: ({ InitialPage } = data)
	$: portfolio = $InitialPage?.data?.getUserPortfolio?.portfolio
	$: assets = $InitialPage?.data?.listAssets?.assets

	$: filteredAssets = assets?.filter(asset => asset?.ticker.toLowerCase().includes(searchTerm.toLowerCase()))

	let searchTerm = ''
</script>

<svelte:head>
	<title>My Investing</title>
	<meta name="description" content="My investing" />
</svelte:head>
<form>
	<div class="grid gap-6 mb-6 md:grid-cols-6">
		<Button>Select Your Asset<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
		<Dropdown class="overflow-y-auto px-3 pb-3 text-sm h-44">
			<div slot="header" class="p-3">
				<Search size="md" bind:value={searchTerm} />
			</div>
			{#each filteredAssets ?? [] as asset}
				<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
					{asset?.ticker}
				</li>
			{/each}
		</Dropdown>
		<div>
			<Input type="text" id="unitaryPrice" placeholder="Unitary Price" required/>
		</div>
		<div>
			<Input type="text" id="quantity" placeholder="Quantity" required/>
		</div>
		<div>
			<Input type="text" id="operationType" placeholder="Operation Type" required />
		</div>
		<div>
			<Input type="text" id="transactionDate" placeholder="Transaction Date" required />
		</div>
		<Button><CheckOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
	</div>
</form>



<style>

</style>
