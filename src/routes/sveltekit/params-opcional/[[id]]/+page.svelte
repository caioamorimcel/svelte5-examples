<script lang="ts">
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

<div>O DUPLO COLCHETE NO NOME DA PASTA CARACTERIZA O PARAM COMO OPCIONAL.</div>

{data.id ?? 'PARAM NÃO ENCONTRADO'}
