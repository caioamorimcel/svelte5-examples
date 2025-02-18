<script>
	let contador = 0;
</script>

<button
	on:click={() => {
		contador += 1;
	}}
	style:background-color={contador > 10 ? 'blue' : 'white'}
>
	Clique para mudar a cor
</button>
{contador}
