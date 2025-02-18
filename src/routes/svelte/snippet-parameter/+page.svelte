<script lang="ts">
</script>

{#snippet saudacao(par: string)}
	<div>FELIZ {par}!</div>
{/snippet}

{@render saudacao('NATAL')}
{@render saudacao('ANO NOVO')}
{@render saudacao('PÁSCOA')}
