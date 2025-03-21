<script lang="ts">
	import { funcaoEnviarFormulario } from '$lib/functions/funcaoEnviarFormulario';
</script>

NESTE EXEMPLO A ACTION (QUE RODA NO SERVIDOR) É EXECUTADA PELO FORMULÁRIO (SEM RECARREGAMENTO DE
PÁGINA).

<form
	action="?/actionDadosDoFormulario"
	method="POST"
	onsubmit={(event) => {
		funcaoEnviarFormulario(event);
	}}
>
	<input type="text" name="nomedocampo" value="OI" />
	<button type="submit">ENVIAR</button>
</form>
