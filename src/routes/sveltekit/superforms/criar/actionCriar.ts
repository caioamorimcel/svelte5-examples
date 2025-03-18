import { functionValidation } from '$lib/server/functionValidation';
import { prismaClient } from '$lib/server/prismaClient';
import type { Action } from './$types';
import { schema } from './schema.server';

export const actionCriar: Action = async function ({ request }) {
	const validation = await functionValidation({
		request,
		schema,
	});

	if (validation.success === false) {
		return validation.fail;
	}

	await prismaClient.tabelaUsuarios.create({
		data: validation.data,
	});
};
