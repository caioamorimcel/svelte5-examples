<script lang="ts">
	import type { Action } from 'svelte/action';

	let mostrar = $state(false);

	const useAlert: Action = function () {
		alert('apareceu');
	};
</script>

<input type="checkbox" bind:checked={mostrar} />

{#if mostrar}
	<div use:useAlert></div>
{/if}
