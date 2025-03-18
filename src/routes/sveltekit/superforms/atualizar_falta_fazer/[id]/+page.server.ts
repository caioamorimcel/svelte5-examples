import { prismaClient } from '$lib/server/prismaClient';
import type { Actions, PageServerLoad } from './$types';
import { actionCriar } from './actionCriar';

export const load: PageServerLoad = async ({ params }) => {
	const usuario = await prismaClient.tabelaUsuarios.findUniqueOrThrow({
		where: {
			idUsuarios: parseInt(params.id),
		},
	});
	return {
		usuario,
	};
};

export const actions: Actions = {
	actionCriar,
};
