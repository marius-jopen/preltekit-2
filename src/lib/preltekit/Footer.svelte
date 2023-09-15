<script>
	import { PrismicLink, PrismicText } from '@prismicio/svelte';

	import Bounded from '$lib/components/Bounded.svelte';

	/** @type {import("@prismicio/client").Content.SettingsDocument} */
	export let settings;
	/** @type {import("@prismicio/client").Content.NavigationDocument} */
	export let navigation;

    let sitemap = true
</script>

<Bounded tag="header" yPadding="xs">
	<div class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 leading-none text-sm tracking-tight">
		<a href="/" class="">
			© <PrismicText field={settings.data.siteTitle} />, {new Date().getFullYear() }
		</a>

		<nav>
			<ul class="flex flex-wrap gap-6 md:gap-10">
				{#each navigation.data?.links as item}
					<li class="">
						<PrismicLink field={item.link}>
							<PrismicText field={item.label} />
						</PrismicLink>
					</li>
				{/each}

                {#if sitemap}
                    <li class="">
                        <a href="/sitemap.xml">Sitemap</a>
                    </li>
                {/if} 
			</ul>
		</nav>
	</div>
</Bounded>