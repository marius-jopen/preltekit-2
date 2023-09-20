<script>
	import { page } from '$app/stores'
	import * as prismic from '@prismicio/client';

	export let document

	const settings = $page.data.settings
	
	let url = $page.url.href;
	let language = settings.meta_language
	let divider = ' | '
	let websiteTitle = settings.data.meta_title
	let websiteDescription = settings.data.meta_description
	let websiteImage = settings.data.meta_image 
	let pageTitle = document.data.meta_title
	let pageDescription = document.data.meta_description
	let pageImage = document.data.meta_image

	websiteTitle = prismic.isFilled.title(websiteTitle) ? websiteTitle : 'Website Title'
	websiteDescription = prismic.isFilled.title(websiteDescription) ? websiteDescription : 'Website Description'
	websiteImage = prismic.isFilled.image(websiteImage) ? websiteImage : undefined

	let title = prismic.isFilled.title(pageTitle) ? pageTitle + divider + websiteTitle : websiteTitle
	let description = prismic.isFilled.title(pageDescription) ? pageDescription : websiteDescription
	let image = prismic.isFilled.image(pageImage) ? pageImage : websiteImage
</script>

<svelte:head>
	<title>{title}</title>
	
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
	<meta name="siteUrl" content={url} />
	<meta name="pageTitle" content={title} />
	<meta name="description" content={description} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	
	{#if image}
		<meta name="twitter:image" content={image.url + '&fm=webp&lossless=true'} />
	{/if}

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={title} />
	<meta property="og:locale" content={language} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />

	{#if image}
		<meta property="og:image" content={image.url + '&fm=webp&lossless=true'} />
		<meta property="og:image:width" content={image.dimensions.width} />
		<meta property="og:image:height" content={image.dimensions.height} />
		<meta property="og:image:alt" content={image.alt} /> 
	{/if}
</svelte:head>