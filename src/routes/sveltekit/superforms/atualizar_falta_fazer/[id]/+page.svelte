<script lang="ts">
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<form action="?/actionCriar" method="POST">
	<div>
		<label for="campoNome"> NOME: </label>
		<input type="text" id="campoNome" name="campoNome" required value={data.usuario.campoNome} />
	</div>
	<div>
		<label for="campoIdade"> IDADE: </label>
		<input type="number" id="campoIdade" name="campoIdade" value={data.usuario.campoIdade} />
	</div>
	<button type="submit">CRIAR USUÁRIO</button>
</form>
