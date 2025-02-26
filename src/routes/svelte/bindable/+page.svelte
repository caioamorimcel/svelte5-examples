<script lang="ts">
	import Componente from './Componente.svelte';

	let contador = $state(0);
</script>

<div>
	COM BIND:
	<Componente bind:prop={contador} />
</div>
<div>
	SEM BIND:
	<Componente prop={contador} />
</div>

<div>
	CONTADOR: {contador}
</div>
