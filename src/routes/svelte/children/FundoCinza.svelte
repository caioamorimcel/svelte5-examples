<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children
	}: {
		children?: Snippet;
	} = $props();
</script>

<div style="background:lightgrey">
	{#if children}
		{@render children()}
	{:else}
		<div style="color:red;">VAZIO!</div>
	{/if}
</div>
