<script>
	let number = $state(0);
</script>

<input type="number" bind:value={number} />

<div>Seu dobro é {number * 2}</div>
