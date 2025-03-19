import { funcaoValidacao } from '$lib/server/funcaoValidacao';
import { prismaClient } from '$lib/server/prismaClient';
import type { Action } from './$types';
import { schema } from './schema.server';

export const actionCriar: Action = async function ({ request }) {
	const validacao = await funcaoValidacao({
		request,
		schema,
	});

	if (validacao.valid === false) {
		return validacao.fail;
	}

	await prismaClient.tabelaUsuarios.create({
		data: validacao.data,
	});

	return {
		success: true,
	};
};
