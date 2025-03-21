import { fail } from '@sveltejs/kit';
import type { Action } from './$types';

export const actionDadosDoFormulario: Action = async function ({ request }) {
	const formdata = Object.fromEntries(await request.formData());
	console.log(formdata);

	const aleatorio = Math.random();

	if (aleatorio < 0.5) {
		return fail(400, {
			success: false,
			mensagem: 'deu errado',
		}); // A LOAD FUNCTION NÃO SERÁ EXECUTADA NOVAMENTE POIS UM RETORNO COM FAIL NÃO PROVOCA O INVALIDATEALL.
	}
	return {
		success: true, // A LOAD FUNCTION SERÁ EXECUTADA NOVAMENTE POIS UM RETORNO PURO E SIMPLES PROVOCA O INVALIDATEALL.
	};
};
