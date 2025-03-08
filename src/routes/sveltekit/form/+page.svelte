<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<button
	onclick={() => {
		goto('./form/criar');
	}}>CRIAR USUÁRIO</button
>

<ul>
	{#if data.usuarios.length === 0}
		NENHUM USUÁRIO ENCONTRADO.
	{:else}
		{#each data.usuarios as current}
			<li>
				{current.campoNome} / {current.campoIdade} / {current.campoOculos
					? 'USA ÓCULOS'
					: 'NÃO USA ÓCULOS'}
			</li>
		{/each}
	{/if}
</ul>
