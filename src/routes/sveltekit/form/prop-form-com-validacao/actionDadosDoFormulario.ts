import { funcaoValidacao } from '$lib/server/funcaoValidacao';
import type { Action } from './$types';
import { schema } from './schema.server';

export const actionDadosDoFormulario: Action = async function ({ request }) {
	const validacao = await funcaoValidacao({
		request,
		schema,
	});

	if (validacao.valid === false) {
		return validacao.fail;
	}

	console.log(validacao.data);

	return {
		success: true, // A LOAD FUNCTION SERÁ EXECUTADA NOVAMENTE POIS UM RETORNO PURO E SIMPLES PROVOCA O INVALIDATEALL.
	};
};
