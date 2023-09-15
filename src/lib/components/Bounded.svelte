<script>
	import clsx from 'clsx';

	export let tag = 'section';
	export let yPadding = 'base';
	export let collapsible = true;
</script>

<svelte:element
	this={tag}
	data-collapsible={collapsible}
	{...$$restProps}
	class={clsx(
		'px-6',
		yPadding === 'xs' && 'pb-4 md:pb-4',
		yPadding === 'sm' && 'pb-8 md:pb-10',
		yPadding === 'base' && 'pb-12 md:pb-14',
		yPadding === 'lg' && 'pb-20 md:pb-28',
		$$props.class
	)}
>
	<div class="mx-auto w-full max-w-6xl "><slot /></div>
</svelte:element>
