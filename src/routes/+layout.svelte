<script>
	import '../app.css';
  import { repositoryName } from "$lib/prismicio"
	import Header from '$lib/components/Header.svelte';


	export let data;
</script>

<svelte:head>
  <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo={repositoryName}"></script>
</svelte:head>

<div class="text-slate-800">
	<Header navigation={data.navigation} settings={data.settings} />
	
	<main><slot /></main>
</div>
