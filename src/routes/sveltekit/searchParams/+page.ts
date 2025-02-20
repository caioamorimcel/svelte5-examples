import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
	const produto = url.searchParams.get('produto');
	const loja = url.searchParams.get('loja');
	const cidade = url.searchParams.get('cidade');
	console.log(`O PRODUTO É ${produto}.`);
	console.log(`A LOJA É ${loja}.`);
	console.log(`A CIDADE É ${cidade}.`);
	return {};
};
