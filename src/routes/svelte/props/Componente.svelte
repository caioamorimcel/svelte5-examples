<script lang="ts">
	let {
		nome = 'Joaquim',
		idade
	}: {
		nome: string;
		idade?: number;
	} = $props();
</script>

<p>MEU NOME É {nome}.</p>

{#if idade !== undefined}
	<p>Eu tenho {idade} anos.</p>
{/if}
