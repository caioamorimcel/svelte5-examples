<script lang="ts">
	import { goto } from '$app/navigation';
	import { funcaoEnviarFormulario } from '$lib/functions/funcaoEnviarFormulario';
	import type { PageProps } from './$types';

	let { data, form }: PageProps = $props();

	$effect(() => {
		if (form?.success) {
			goto('../');
		}
	});
</script>

<div>
	<a href="../">VOLTAR</a>
</div>

<br />

<form action="?/actionAtualizar" method="POST" onsubmit={funcaoEnviarFormulario}>
	<div>
		NOME: <input
			required
			type="text"
			id="campoNome"
			name="campoNome"
			value={data.user?.campoNome ?? ''}
		/>
	</div>
	<div>
		IDADE (opcional): <input
			type="number"
			id="campoIdade"
			name="campoIdade"
			value={data.user.campoIdade ?? ''}
		/>
	</div>
	<div>
		USA ÓCULOS: <input
			type="checkbox"
			id="campoOculos"
			name="campoOculos"
			checked={data.user.campoOculos}
		/>
	</div>

	<br />
	<div>
		<button type="submit">ENVIAR</button>
	</div>
</form>
