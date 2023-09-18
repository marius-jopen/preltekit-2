<script>
	import { PrismicLink, PrismicText } from '@prismicio/svelte';

	import Bounded from '$lib/components/Bounded.svelte';

	/** @type {import("@prismicio/client").Content.SettingsDocument} */
	export let settings;
	/** @type {import("@prismicio/client").Content.NavigationDocument} */
	export let navigation;

    let sitemap = true
</script>

<Bounded 
	tag="footer" 
	class="!pt-0"
	yPadding="xs"
>
	<div class="flex-col-reverse tablet:flex-row flex flex-wrap  items-baseline justify-between gap-x-6 gap-y-3 leading-none text-sm tracking-tight text-center tablet:text-left">
		<a href="/" class="w-full tablet:w-auto pt-8 tablet:pt-0">
			© <PrismicText field={settings.data.siteTitle} />, {new Date().getFullYear() }
		</a>

		<nav class="w-full tablet:w-auto">
			<ul class="flex flex-wrap gap-4 tablet:gap-10 flex-col tablet:flex-row">
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