import { funcaoValidacao } from '$lib/server/funcaoValidacao';
import { prismaClient } from '$lib/server/prismaClient';
import type { Action, Actions, PageServerLoad } from './$types';
import { schema } from './schema.server';

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

const actionAtualizar: Action = async function ({ request, params }) {
	const validacao = await funcaoValidacao({
		request,
		schema,
	});

	if (validacao.valid === false) {
		return validacao.fail;
	}

	await prismaClient.tabelaUsuarios.update({
		where: {
			idUsuarios: parseInt(params.id),
		},
		data: validacao.data,
	});

	return {
		success: true,
	};
};

export const actions: Actions = {
	actionAtualizar,
};
