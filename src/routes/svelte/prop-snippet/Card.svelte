<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		cabecalho
	}: {
		children: Snippet;
		cabecalho: Snippet;
	} = $props();
</script>

<div class="classCard">
	<h3 class="classCardTitle">
		{@render cabecalho()}
	</h3>
	<p class="classCardText">
		{@render children()}
	</p>
</div>

<style>
	.classCard {
		font-family: Arial, sans-serif;
		margin: 0;
		padding: 0;
		width: 280px;
		border-radius: 12px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		padding: 20px;
		text-align: center;
	}

	.classCardTitle {
		margin: 0;
		padding: 0;
		font-size: 1.4rem;
		font-weight: bold;
		margin-bottom: 10px;
	}

	.classCardText {
		margin: 0;
		padding: 0;
		font-size: 1rem;
	}
</style>
