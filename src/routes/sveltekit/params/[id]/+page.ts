import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const id = params.id;
	const resposta = await fetch(
		`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`
	);
	const heroi = await resposta.json();
	return {
		heroi
	};
};
