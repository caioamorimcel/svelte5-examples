<script lang="ts">
	import { goto } from '$app/navigation';
	import { funcaoEnviarFormulario } from '$lib/functions/funcaoEnviarFormulario';
	import type { PageProps } from './$types';

	let { form }: PageProps = $props();

	$effect(() => {
		if (form?.success) {
			goto('./');
		}
	});
</script>

<div>
	<a href="./">VOLTAR</a>
</div>

<br />

<form action="?/actionCriar" method="POST" onsubmit={funcaoEnviarFormulario}>
	<div>
		NOME: <input autocomplete="off" required type="text" id="campoNome" name="campoNome" />
	</div>
	<div>
		IDADE (opcional): <input type="number" id="campoIdade" name="campoIdade" />
	</div>
	<div>
		USA ÓCULOS: <input type="checkbox" id="campoOculos" name="campoOculos" />
	</div>

	{#if form?.success === false}
		<div>
			OS DADOS ENVIADOS PARA O SERVIDOR NÃO SATISFAZEM O SCHEMA. OU SEJA, NÃO FORAM VALIDADOS.
		</div>
	{/if}
	<br />
	<div>
		<button type="submit">ENVIAR</button>
	</div>
</form>
