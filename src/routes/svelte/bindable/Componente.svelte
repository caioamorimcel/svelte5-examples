<script lang="ts">
	let {
		prop = $bindable()
	}: {
		prop: number;
	} = $props();
</script>

<button onclick={() => (prop = prop - 1)}>DIMINUIR</button>
{prop}
<button onclick={() => (prop = prop + 1)}>AUMENTAR</button>
