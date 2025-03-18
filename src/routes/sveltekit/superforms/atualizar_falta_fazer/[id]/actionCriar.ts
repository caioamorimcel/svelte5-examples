// import { prismaClient } from '$lib/server/prismaClient';
import type { Action } from './$types';

export const actionCriar: Action = async function ({ request }) {
	const formdata = await request.formData();
	const dadosDoFormulario = Object.fromEntries(formdata);

	console.log(dadosDoFormulario);
	// await prismaClient.tabelaUsuarios.create({
	// 	data: {
	// 		campoNome: dadosDoFormulario.campoNome as string,
	// 		campoCidade: dadosDoFormulario.campoCidade as string,
	// 	},
	// });
};
