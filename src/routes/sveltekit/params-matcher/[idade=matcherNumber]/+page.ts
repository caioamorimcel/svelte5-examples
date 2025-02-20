import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const idade = params.idade;
	console.log(`A IDADE É ${idade} ANOS.`);
	return {};
};
