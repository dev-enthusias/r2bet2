<script lang="ts">
	import bgImage from '$lib/components/layout/landing-header.jpg';
	const { children } = $props();
</script>

<section
	class="bg-[#00170ABD] bg-cover bg-center bg-no-repeat px-[192px] py-5 bg-blend-overlay"
	style="background-image: url({bgImage});"
>
	{@render children()}
</section>
