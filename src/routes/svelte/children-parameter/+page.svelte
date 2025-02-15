<script>
	import FundoCinza from './FundoCinza.svelte';
</script>

<FundoCinza>
	{#snippet children(parametro)}
		<div style="color:white;">
			O CONTADOR É: {parametro}
		</div>
	{/snippet}
</FundoCinza>
