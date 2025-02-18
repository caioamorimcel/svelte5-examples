<script>
	let texto = $state('');
</script>

<div>
	<input type="text" bind:value={texto} placeholder="DIGITE AQUI..." />
</div>
<div>O TEXTO DIGITADO É: {texto}</div>
