<script>
	import '../app.css';
  import { repositoryName } from "$lib/prismicio"
	import HeaderSticky from '$lib/preltekit/HeaderSticky.svelte';
	import Footer from '$lib/preltekit/Footer.svelte';

	export let data;
</script>

<svelte:head>
  <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo={repositoryName}"></script>
</svelte:head>

<div class="text-slate-800">
	<HeaderSticky navigation={data.navigation} settings={data.settings} />
	
	<main><slot /></main>

	<Footer navigation={data.navigation} settings={data.settings} />
</div>
