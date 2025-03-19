import { applyAction, deserialize } from '$app/forms';
import { invalidateAll } from '$app/navigation';
import type { ActionResult } from '@sveltejs/kit';

export async function funcaoEnviarFormulario(
	event: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement },
) {
	event.preventDefault();
	const formdata = new FormData(event.currentTarget);

	const response = await fetch(event.currentTarget.action, {
		method: 'POST',
		body: formdata,
	});

	const result: ActionResult = deserialize(await response.text());

	if (result.type === 'success') {
		// rerun all `load` functions, following the successful update
		await invalidateAll();
	}

	applyAction(result);
}
