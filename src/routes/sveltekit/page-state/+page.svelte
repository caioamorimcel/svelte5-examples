<script lang="ts">
	import Filho from './Filho.svelte';
</script>

<div style="background-color:lightgrey; padding:2rem; margin-bottom:1rem;">
	O SvelteKit disponibiliza um estado 'page' (somente leitura) por meio do módulo '$app/state'. Este
	estado, fornece informações sobre a página atual, como:

	<ul>
		<li>url: o URL da página atual</li>
		<li>params: os parâmetros da página atual</li>
		<li>route: um objeto com uma propriedade id que representa a rota atual</li>
		<li>status: o código de status HTTP da página atual</li>
		<li>
			error: o objeto error da página atual, se houver (você aprenderá mais sobre o tratamento de
			erros em exercícios posteriores)
		</li>
		<li>
			data: os dados da página atual, combinando os valores de retorno de todas as funções de carga
		</li>
		<li>form: os dados retornados de uma ação de formulário</li>
	</ul>
</div>

VEJAMOS UM EXEMPLO ABAIXO, ONDE O COMPONENTE NETO ACESSA, POR EXEMPLO, O pathname DA PÁGINA E TAMBÉM
OS DADOS CARREGADOS PELA LOAD FUNCTION:

<Filho />
