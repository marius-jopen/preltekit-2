<script>
	import { page } from '$app/stores'

	export let document

	const settings = $page.data.settings
	
	let url = $page.url.href;
	let language = settings.meta_language
	let divider = '|'
	let pageTitle = document.data.meta_title
	let backupTitle = settings.data.meta_title
	let pageDescription = document.data.meta_description
	let backupDescription = settings.data.meta_description
	let pageImage = document.data.meta_image
	let backupImage = settings.data.meta_image

	let title = pageTitle ? pageTitle + ` ${divider} ${backupTitle}` : backupTitle + ` ${divider} ${backupTitle}`
	let description = pageDescription ? pageDescription : backupDescription
	let imageUrl = pageImage ? pageImage.url + '&fm=webp&lossless=true' : backupImage.url + '&fm=webp&lossless=true'
	let imageWidth = pageImage ? pageImage.dimensions.width : backupImage.dimensions.width
	let imageHeight = pageImage ? pageImage.dimensions.height : backupImage.dimensions.height
	let imageAlt = pageImage ? pageImage.alt : backupImage.alt
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
	<meta name="twitter:image" content={imageUrl} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={title} />
	<meta property="og:locale" content={language} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />

	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:width" content={imageWidth} />
	<meta property="og:image:height" content={imageHeight} />
	<meta property="og:image:alt" content={imageAlt} />
</svelte:head>