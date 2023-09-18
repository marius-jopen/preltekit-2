<script>
	import { SliceZone } from '@prismicio/svelte';
  import Seo from "$lib/preltekit/seo.svelte"

	import { components } from '$lib/slices';

	export let data;
</script>

<Seo document={data.document} />

<SliceZone slices={data.document.data.slices} {components} />
