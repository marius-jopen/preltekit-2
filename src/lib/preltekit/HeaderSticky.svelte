<script>
	import { PrismicLink, PrismicText } from '@prismicio/svelte';
	import { fade } from 'svelte/transition';
	import Bounded from '$lib/components/Bounded.svelte';
    import { Hamburger } from 'svelte-hamburgers';

	/** @type {import("@prismicio/client").Content.SettingsDocument} */
	export let settings;
	/** @type {import("@prismicio/client").Content.NavigationDocument} */
	export let navigation;

    let open = false;

	function close() {
		open = false;
	}
</script>

<Bounded tag="header" yPadding="xs" class="fixed z-20 bg-white w-full">
	<div class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 leading-none">
		<a href="/" class="text-xl font-semibold tracking-tight">
			<PrismicText field={settings.data.siteTitle} />
		</a>

		<nav>
			<ul class="flex flex-wrap gap-6 md:gap-10">
				{#each navigation.data?.links as item}
					<li class="font-semibold tracking-tight text-slate-800">
						<PrismicLink field={item.link}>
							<PrismicText field={item.label} />
						</PrismicLink>
					</li>
				{/each}
			</ul>
		</nav>

        <div class="block md:hidden">
            <Hamburger bind:open type="squeeze" --layer-height="2px" --padding="0px" />
        </div>
	</div>
</Bounded>


<!-- Placeholder to push the content down -->
<Bounded tag="header" yPadding="xs" />

<!-- Mobile Navigation Overlay -->
{#if open == true}
	<nav class="flex sm:hidden top-0 h-screen fixed w-screen z-10 bg-white flex-col justify-center" transition:fade >
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<ul class="flex flex-col text-center -mt-20 leading-8" on:click={close}>
			{#each navigation.data?.links as item}
                <li class="font-semibold tracking-tight text-slate-800">
                    <PrismicLink field={item.link}>
                        <PrismicText field={item.label} />
                    </PrismicLink>
                </li>
            {/each}
		</ul>
	</nav>
{/if}
