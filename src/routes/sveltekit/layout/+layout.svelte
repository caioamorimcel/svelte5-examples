<script lang="ts">
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<ul>
	<li>
		<a href="/sveltekit/layout">PÁGINA PRINCIPAL</a>
	</li>
	<li>
		<a href="/sveltekit/layout/pagina1">PÁGINA 1</a>
	</li>
	<li>
		<a href="/sveltekit/layout/pagina2">PÁGINA 2</a>
	</li>
</ul>

{@render children()}
