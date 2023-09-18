<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
	import Seo from "$lib/preltekit/seo.svelte"

	export let data;
</script>

<Seo document={data.document} />

<SliceZone slices={data.document.data.slices} {components} />
