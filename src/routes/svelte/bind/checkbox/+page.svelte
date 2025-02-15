<script lang="ts">
	let estado = $state(true);
</script>

<input type="checkbox" bind:checked={estado} />

{#if estado}
	<div>ESTÁ MARCADO.</div>
{:else}
	<div>NÃO ESTÁ MARCADO.</div>
{/if}
