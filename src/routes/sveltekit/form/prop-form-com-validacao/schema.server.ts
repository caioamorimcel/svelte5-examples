import { z } from 'zod';
import { zfd } from 'zod-form-data';

export const schema = zfd.formData({
	nomedocampo: z.string().min(5, { message: 'ESTE CAMPO DEVE TER MAIS DE 5 CARACTERES.' }),
	campodeemail: z.string().email({ message: 'ESTE CAMPO DEVE CONTER UM E-MAIL VÁLIDO.' }),
});
