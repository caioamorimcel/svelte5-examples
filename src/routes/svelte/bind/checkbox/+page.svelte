<script lang="ts">
	let estado = $state(true);
</script>

<input type="checkbox" bind:checked={estado} />

{#if estado}
	<div>Está marcado.</div>
{:else}
	<div>Não está marcado.</div>
{/if}
