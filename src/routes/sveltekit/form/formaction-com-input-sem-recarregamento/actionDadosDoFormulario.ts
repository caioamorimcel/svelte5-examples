import type { Action } from './$types';

export const actionDadosDoFormulario: Action = async function ({ request }) {
	const formdata = Object.fromEntries(await request.formData());
	console.log(formdata);
};
