import { prismaClient } from '$lib/server/prismaClient';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const usuarios = await prismaClient.tabelaUsuarios.findMany({
		orderBy: {
			campoNome: 'asc',
		},
	});
	return {
		usuarios,
	};
};
