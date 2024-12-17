<script lang="ts">
	import SocialLinks from '$lib/components/layout/social-link.svelte';
	import NavigationMenu from '$lib/components/layout/navigation-menu.svelte';
	import Sponsors from '$lib/components/layout/sponsors.svelte';
	import authBackgroundImage from '$lib/public/images/sidepreview.jpg';

	let { children } = $props();
</script>

<header class="shrink-0">
	<SocialLinks />
	<NavigationMenu />
	<Sponsors />
</header>
<main class="relative flex justify-center">
	<div class="absolute left-0 top-0 h-full w-[47%]">
		<img src={authBackgroundImage} alt="" class="h-full w-full object-cover" />
	</div>
	<article class="custom-shadow z-50 my-[202px] w-[537px] bg-white px-10 py-9">
		{@render children()}
	</article>
</main>
