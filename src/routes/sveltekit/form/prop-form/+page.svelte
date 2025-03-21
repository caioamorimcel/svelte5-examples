<script lang="ts">
	import { funcaoEnviarFormulario } from '$lib/functions/funcaoEnviarFormulario';
	import type { PageProps } from './$types';

	let { data, form }: PageProps = $props();
</script>

<div>
	CLIQUE NO BOTÃO ABAIXO VÁRIAS VEZES PARA VER A PROP form SER PREENCHIDA. ORA PELO RETORNO DA
	formaction ORA PELO OBJETO EMITIDO PELO FAIL.
</div>

<!-- <div>
	{JSON.stringify(form)}
</div> -->

<form
	action="?/actionDadosDoFormulario"
	method="POST"
	onsubmit={(event) => {
		funcaoEnviarFormulario(event);
	}}
>
	<input type="text" name="nomedocampo" value={data.nome} />
	<div>
		{#if form !== null}
			{#if form.success}
				DEU TUDO CERTO!
			{:else}
				ALGO DEU ERRADO!
			{/if}
		{/if}
	</div>
	<button type="submit">ENVIAR</button>
</form>
