<script>
	let contador = $state(1);
</script>

<div>CONTADOR: {contador}</div>
<div>
	<button onclick={() => (contador = contador + 1)}>AUMENTAR</button>
	<button onclick={() => (contador = contador - 1)}>DIMINUIR</button>
</div>
