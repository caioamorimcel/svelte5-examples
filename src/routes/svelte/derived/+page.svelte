<script lang="ts">
	let contador = $state(10);
	let dobro = $derived(contador * 2);
</script>

<div>O DOBRO DE {contador} É {dobro}.</div>

<button
	onclick={() => {
		contador = contador + 1;
	}}
>
	AUMENTAR
</button>
