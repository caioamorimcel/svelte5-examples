import { z } from 'zod';
import { zfd } from 'zod-form-data';

export const schema = zfd.formData({
	campoNome: zfd.text(),
	campoIdade: zfd.numeric(z.number().optional()),
	campoOculos: zfd.checkbox(),
});
