<script>
	let contador = $state(0);
</script>

<div>
	CLIQUE NOS BOTÕES PARA MODIFICAR O VALOR DO CONTADOR. PARA VALORES POSITIVOS, O FUNDO FICARÁ VERDE
	E PARA VALORES NEGATIVOS FICARÁ VERMELHO.
</div>

<div>
	<button onclick={() => (contador = contador - 1)}>DIMINUIR</button>
	<span class:classGreen={contador > 0} class:classRed={contador < 0}>
		{contador}
	</span>
	<button onclick={() => (contador = contador + 1)}>AUMENTAR</button>
</div>

<style>
	.classRed {
		background-color: red;
		color: white;
	}
	.classGreen {
		background-color: green;
		color: white;
	}
</style>
