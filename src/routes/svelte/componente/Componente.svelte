<script lang="ts">
	let contador = $state(0);
</script>

<button class="classeAmarela" onclick={() => (contador = contador - 1)}>DIMINUIR</button>
{contador}
<button class="classeAmarela" onclick={() => (contador = contador + 1)}>AUMENTAR</button>

<style>
	.classeAmarela {
		background-color: yellow;
	}
</style>
