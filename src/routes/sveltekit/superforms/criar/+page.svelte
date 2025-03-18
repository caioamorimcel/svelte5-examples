<script lang="ts">
</script>

<a href="./">VOLTAR</a>

<form action="?/actionCriar" method="POST">
	<div>
		<label for="campoNome"> NOME: </label>
		<input type="text" id="campoNome" name="campoNome" required value="" />
	</div>
	<div>
		<label for="campoIdade"> IDADE: </label>
		<input type="number" id="campoIdade" name="campoIdade" value="" />
	</div>
	<div>
		<label for="campoIdade"> USA ÓCULOS: </label>
		<input type="checkbox" id="campoOculos" name="campoOculos" checked={false} />
	</div>
	<button type="submit">ENVIAR</button>
</form>
