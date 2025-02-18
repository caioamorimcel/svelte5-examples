<script>
	let contador = $state(0);
</script>

<div>
	CLIQUE NOS BOTÕES PARA MODIFICAR O VALOR DO CONTADOR. PARA VALORES POSITIVOS, O FUNDO FICARÁ
	VERDE. CASO CONTRÁRIO, O FUNDO FICARÁ VERMELHO.
</div>
<div>
	<button onclick={() => (contador = contador - 1)}> DIMINUIR </button>
	<span style:background-color={contador > 0 ? 'lightgreen' : 'red'}>
		{contador}
	</span>
	<button onclick={() => (contador = contador + 1)}> AUMENTAR </button>
</div>
