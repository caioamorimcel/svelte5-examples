<script lang="ts">
	import Componente from './Componente.svelte';

	let exibir = $state(false);
</script>

CLIQUE NO CHECKBOX ABAIXO PARA MONTAR O COMPONENTE NA TELA. OBSERVE QUE, TODA VEZ QUE O COMPONENTE É
MONTADO, O EFFECT É DISPARADO!

<div>
	<input type="checkbox" bind:checked={exibir} />
</div>

{#if exibir}
	<Componente />
{/if}
