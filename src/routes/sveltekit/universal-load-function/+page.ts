import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	console.log('ESTA MENSAGEM IRÁ APARECER TANTO NO TERMINAL QUANTO NO CONSOLE DO NAVEGADOR.');
	return {
		objeto: 'ESTA INFORMAÇÃO FOI CARREGARA TANTO NO SERVIDOR QUANTO NO NAVEGADOR.'
	};
};
