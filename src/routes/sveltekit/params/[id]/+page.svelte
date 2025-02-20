<script lang="ts">
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

NESTE EXEMPLO, O ID 620 É CARREGADO NA LOAD FUNCTION E UMA REQUISIÇÃO FETCH É FEITA PARA UMA API COM
DADOS DE SUPER HERÓIS. COMO O SUPER HERÓI DE ID 620 É O HOMEM ARANHA, SUA IMAGEM É PASSADA À PÁGINA
E EXIBIDA.

<img src={data.heroi.images.md} alt="alt" />
