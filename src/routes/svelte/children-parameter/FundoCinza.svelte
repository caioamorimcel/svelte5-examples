<script lang="ts">
	import type { Snippet } from 'svelte';

	let stateCounter = $state<number>(1);

	let {
		children
	}: {
		children: Snippet<[number]>;
	} = $props();
</script>

<button onclick={() => (stateCounter = stateCounter + 1)}> AUMENTAR </button>

<div style="background:lightgrey">
	{@render children(stateCounter)}
</div>
