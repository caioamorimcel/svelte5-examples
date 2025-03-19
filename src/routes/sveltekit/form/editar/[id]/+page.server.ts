import { prismaClient } from '$lib/server/prismaClient';
import type { Actions, PageServerLoad } from './$types';
import { actionAtualizar } from './actionAtualizar';

export const load: PageServerLoad = async ({ params }) => {
	const user = await prismaClient.tabelaUsuarios.findUniqueOrThrow({
		where: {
			idUsuarios: parseInt(params.id),
		},
	});

	return {
		user,
	};
};

export const actions: Actions = {
	actionAtualizar,
};
