import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	console.log(
		'ESTA MENSAGEM IRÁ APARECER APENAS NO TERMINAL. POIS ESTE ARQUIVO SÓ RODA NO SERVIDOR.',
	);
	return {
		objeto: 'ESTA INFORMAÇÃO FOI CARREGARA NO SERVIDOR.',
	};
};
