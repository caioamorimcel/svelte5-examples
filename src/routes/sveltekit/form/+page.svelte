<script lang="ts">
	// import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<a href="./form/criar/">CRIAR</a>

<ul>
	{#if data.usuarios.length === 0}
		NENHUM USUÁRIO ENCONTRADO.
	{:else}
		{#each data.usuarios as current}
			<li>
				NOME: {current.campoNome} / IDADE: {current.campoIdade} / {current.campoOculos
					? 'USA ÓCULOS'
					: 'NÃO USA ÓCULOS'} <a href={`./form/editar/${current.idUsuarios}`}>(EDITAR)</a>
			</li>
		{/each}
	{/if}
</ul>
