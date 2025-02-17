<script>
	let contador = $state(0);
</script>

<button
	class:active={contador > 10}
	onclick={() => {
		contador += 1;
	}}>CLIQUE AQUI</button
>
{contador}

<style>
	.active {
		background-color: #ff3e00;
		color: white;
	}
</style>
