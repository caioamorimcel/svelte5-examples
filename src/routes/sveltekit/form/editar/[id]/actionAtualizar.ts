import { funcaoValidacao } from '$lib/server/funcaoValidacao';
import type { Action } from './$types';
import { schema } from './schema.server';

export const actionAtualizar: Action = async function ({ request, params }) {
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
