<script>
	let stateCounter = $state(1);
</script>

<div>COUNTER: {stateCounter}</div>
<div>
	<button onclick={() => (stateCounter = stateCounter + 1)}>AUMENTAR</button>
	<button onclick={() => (stateCounter = stateCounter - 1)}>DIMINUIR</button>
</div>
