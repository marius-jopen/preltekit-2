<script>
	import { PrismicImage } from '@prismicio/svelte';
	import * as prismic from '@prismicio/client';
	import clsx from 'clsx';

	import Bounded from '$lib/components/Bounded.svelte';

	/** @type {import("@prismicio/client").Content.ImageSlice} */
	export let slice;
	/** @type {number} */
	export let index;
</script>

<Bounded
	tag="section"
	yPadding="base"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	{#if prismic.isFilled.image(slice.primary.image)}
		<div class="bg-gray-100">
			<PrismicImage field={slice.primary.image} sizes="100vw" class="w-full" />
		</div>
	{/if}
</Bounded>
