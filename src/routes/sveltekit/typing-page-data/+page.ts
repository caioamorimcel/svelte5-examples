import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const user = { name: 'Caio', idade: 18 };
	return { user };
};
