<script>
	import '../app.css';
	import HeaderSticky from '$lib/preltekit/HeaderSticky.svelte';

	export let data;
</script>

<div class="text-slate-800">
	<HeaderSticky navigation={data.navigation} settings={data.settings} />
	
	<main><slot /></main>
</div>
