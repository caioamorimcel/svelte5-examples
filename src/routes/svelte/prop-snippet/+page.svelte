<script lang="ts">
	import Card from './Card.svelte';
</script>

<Card>
	{#snippet cabecalho()}
		<span style="color:red;"> Título do Card </span>
	{/snippet}
	<span style="color:lightgreen;"> Este é um exemplo de um card simples. </span>
</Card>
