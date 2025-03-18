import { fail } from '@sveltejs/kit';
import { type Schema, z } from 'zod';

export async function functionValidation<T extends Schema>({
	request,
	schema,
	formdata = true,
}: {
	request: Request;
	schema: T;
	formdata?: boolean;
}) {
	const form = await request.formData();
	const object = Object.fromEntries(form);
	const parsed = formdata ? schema.safeParse(form) : schema.safeParse(object);
	if (parsed.success === false) {
		return {
			valid: parsed.success,
			fail: fail(400, {
				success: false,
				errors: parsed.error.flatten().fieldErrors,
			}),
		};
	}
	return {
		valid: parsed.success,
		data: parsed.data as z.infer<T>,
	};
}
