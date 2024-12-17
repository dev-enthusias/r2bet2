<script lang="ts">
	import bgImage from '$lib/public/images/header-bg.jpg';
	const { children } = $props();
</script>

<section
	class="bg-[#000E06E0] bg-cover bg-center bg-no-repeat px-[192px] py-5 bg-blend-overlay"
	style="background-image: url({bgImage});"
>
	{@render children()}
</section>
