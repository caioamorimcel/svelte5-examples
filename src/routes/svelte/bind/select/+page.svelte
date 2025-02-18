<script>
	let fruta = $state('');
</script>

<select bind:value={fruta}>
	<option value="">SELECIONE...</option>
	<option value="LARANJA">LARANJA</option>
	<option value="BANANA">BANANA</option>
	<option value="UVA">UVA</option>
</select>

{#if fruta.length > 0}
	<p>A FRUTA ESCOLHIDA É {fruta}</p>
{/if}
