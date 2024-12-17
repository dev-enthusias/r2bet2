<script lang="ts">
	import Header from '$lib/components/layout/header.svelte';
	import logo from '$lib/public/logo/logo.svg';
	import correctPredict from '$lib/public/logo/correct-predict.png';

	const partners = [
		correctPredict,
		correctPredict,
		correctPredict,
		correctPredict,
		correctPredict,
		correctPredict,
		correctPredict,
		correctPredict,
		correctPredict,
		correctPredict,
		correctPredict,
		correctPredict
	];
</script>

<Header>
	<div class="flex items-center gap-x-2">
		<img src={logo} alt="r2bet logo" width={40} height={42.72} />
		<h1 class="text-4xl font-bold text-white">Partners</h1>
	</div>
</Header>

<main class="grid gap-y-7 bg-[#F5F5F5] px-48 py-12">
	<!-- Partners -->
	<section class="white-container">
		<h2 class="text-primary mb-7 border-b border-b-[#E9F2ED] text-3xl font-bold">Our Partners</h2>

		<div class="grid grid-cols-6 gap-7">
			{#each partners as partner}
				<article class="flex h-[125px] items-center justify-center rounded-xl bg-[#1E1E1E] p-2">
					<img src={partner} alt="partner logo" />
				</article>
			{/each}
		</div>
	</section>

	<!-- Note -->
	<section class="bg-[#F9DEDC] px-6 py-2.5">
		<h2 class="mb-2.5 text-2xl font-bold">ATTENTION:</h2>
		<div class="mb-5 grid gap-y-3">
			<p>
				This page is for our partners. If you want your site added, we recommend that you add us
				first to your page using the information below.
			</p>

			<div class="grid gap-y-3 font-bold">
				<p>Name: R2bet</p>
				<p>Description: Free Prediction Website</p>
				<p>URL: https://www.r2bet.com</p>
			</div>
		</div>

		<p>Then send us an email: contact@r2bet.com</p>
	</section>
</main>
