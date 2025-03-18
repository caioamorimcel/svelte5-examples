import { z } from 'zod';
import { zfd } from 'zod-form-data';

export const schema = zfd.formData({
	campoNome: zfd.text(z.string().toUpperCase()),
	campoIdade: zfd.numeric(z.number()),
	campoOculos: zfd.checkbox(),
});
