<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

<div>
	VALOR ALEATÓRIO OBTIDO PELA LOAD FUNCTION: {data.aleatorio}
</div>
<div>
	<button
		onclick={() => {
			invalidateAll();
		}}>APLICAR O INVALIDATE ALL</button
	>
</div>
