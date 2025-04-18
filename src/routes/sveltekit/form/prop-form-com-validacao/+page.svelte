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
	<br />
	<div>
		ENDEREÇO: <input type="text" name="nomedocampo" value={data.endereco} style="width:500px;" />
	</div>
	{#if form?.errors?.['nomedocampo']}
		<div>
			{form?.errors?.['nomedocampo'][0]}
		</div>
	{/if}
	<br />
	<div>
		EMAIL: <input required type="text" name="campodeemail" style="width:500px;" />
	</div>
	{#if form?.errors?.['campodeemail']}
		<div>
			{form?.errors?.['campodeemail'][0]}
		</div>
	{/if}
	<br />
	<div>
		{#if form !== null}
			{#if form.success === true}
				DEU TUDO CERTO!
			{:else}
				O ENVIO FOI UM FRACASSO!
			{/if}
		{/if}
	</div>
	<br />
	<button type="submit">ENVIAR</button>
</form>
