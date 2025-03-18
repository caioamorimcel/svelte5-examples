<script lang="ts">
	import type { ActionData } from './$types';

	let {
		form,
	}: {
		form: ActionData;
	} = $props();

	$effect(() => {
		if (form?.success) {
			alert('SUCESSO!');
		}
	});
</script>

<a href="./">VOLTAR</a>

<form action="?/actionCriar" method="POST">
	<div>
		<label for="campoNome"> NOME: </label>
		<input type="text" id="campoNome" name="campoNome" required />
	</div>
	<div>
		<label for="campoIdade"> IDADE: </label>
		<input type="number" id="campoIdade" name="campoIdade" />
	</div>
	<div>
		<label for="campoIdade"> USA ÓCULOS: </label>
		<input type="checkbox" id="campoOculos" name="campoOculos" />
	</div>
	<button type="submit">ENVIAR</button>
</form>
