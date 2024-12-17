<script lang="ts">
	import Header from '$lib/components/layout/header.svelte';
	import logo from '$lib/public/logo/logo.svg';
	import Questionaire from '$lib/components/ui/Questionaire.svelte';
</script>

<Header>
	<div class="flex items-center gap-x-2">
		<img src={logo} alt="r2bet logo" width={40} height={42.72} />
		<h1 class="text-4xl font-bold text-white">FAQs</h1>
	</div>
</Header>
<main class="grid gap-y-7 bg-[#F5F5F5] px-48 py-12">
	<section class="mb-7 flex flex-col items-center justify-center">
		<h2 class="mb-1.5 text-2xl font-bold">Can’t find what you are looking for?</h2>
		<div class="flex w-full max-w-[548px] px-1">
			<input
				type="search"
				placeholder="Search"
				class="w-full rounded-l-full border-y border-l border-[#B9B9B9] px-5 text-[#828282]"
			/>
			<div class="bg-primary rounded-r-full px-5 py-3.5 text-white">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
				>
					<path
						d="M11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.2071 20 15.2929 19.1579 16.7071 17.7071L20.7071 21.7071C21.0976 22.0976 21.7308 22.0976 22.1213 21.7071C22.5118 21.3166 22.5118 20.6834 22.1213 20.2929L18.1213 16.2929C19.1579 14.7071 20 12.6129 20 10C20 5.02944 15.9706 1 11 1C6.02944 1 2 5.02944 2 10C2 14.9706 6.02944 19 11 19C14.6129 19 17.7071 16.7071 18.7071 14.7071"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
		</div>
	</section>

	<ul class="grid gap-y-2">
		<li>
			<Questionaire
				question={'What is the best Football Prediction website in the world?'}
				answer={'R2bet is the best football prediction service in the world, R2bet carefully analyze all aspects of football matches to ensure the football predictions are as accurate as possible, and also provide value for our users'}
				index={1}
			/>
		</li>
	</ul>
</main>
