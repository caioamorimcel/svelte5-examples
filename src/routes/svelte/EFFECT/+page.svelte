<script>
	let contador = $state(0);

	$effect(() => {
		if (contador > 10) {
			alert('PASSOU DE 10');
		}
	});
</script>

<button
	onclick={() => {
		contador += 1;
	}}>CLIQUE AQUI</button
>
{contador}
