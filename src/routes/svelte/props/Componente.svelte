<script lang="ts">
	let {
		nome = 'Joaquim',
		idade
	}: {
		nome: string;
		idade?: number;
	} = $props();
</script>

<p>Oi. Meu nome é {nome}.</p>

{#if idade !== undefined}
	<p>E eu tenho {idade} anos</p>
{/if}
