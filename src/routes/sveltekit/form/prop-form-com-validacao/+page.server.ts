import type { Actions, PageServerLoad } from './$types';
import { actionDadosDoFormulario } from './actionDadosDoFormulario';

let contador = 0;

export const load: PageServerLoad = async () => {
	contador = contador + 1;
	return {
		endereco: 'RUA DAS FLORES, NÚMERO ' + contador,
	};
};

export const actions: Actions = {
	actionDadosDoFormulario,
};
