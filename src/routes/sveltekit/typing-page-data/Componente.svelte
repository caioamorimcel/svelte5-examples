<script lang="ts">
	import { page } from '$app/state';
	import type { PageData } from './$types';
	const typedPage = page as unknown as { data: PageData };
</script>

<div>OBSERVE QUE page.data está tipado!</div>
<div>
	{typedPage.data.user.name}
</div>
