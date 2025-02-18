<script>
	let contador = $state(0);

	$effect(() => {
		if (contador > 5) {
			alert('O VALOR MÁXIMO É 5. O CONTADOR SERÁ REINICIADO.');
			contador = 0;
		}
	});
</script>

<div>
	CLIQUE NO BOTÃO PARA AUMENTAR O VALOR DO CONTADOR. AO TENTAR ULTRAPASSAR 5 UNIDADES, UM ALERTA
	SERÁ EXIBIDO.
</div>
<div>
	<span>
		CONTADOR: {contador}
	</span>
	<button
		onclick={() => {
			contador += 1;
		}}>AUMENTAR</button
	>
</div>
