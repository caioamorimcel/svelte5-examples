<script lang="ts">
	import { page } from '$app/state';
</script>

<div>EU SOU O COMPONENTE NETO E EU FUI CAPAZ DE OBTER OS SEGUINTES DADOS:</div>
<ul>
	<li>
		URL DA PÁGINA: {page.url.pathname}
	</li>
	<li>DADOS CARREGADOS PELA LOAD FUNCTION (não tipados): {page.data.user.nome}.</li>
</ul>
