<script lang="ts">
	import Header from '$lib/components/layout/header.svelte';
	import logo from '$lib/public/logo/logo.svg';
</script>

<Header>
	<div class="flex items-center gap-x-2">
		<img src={logo} alt="r2bet logo" width={40} height={42.72} />
		<h1 class="text-4xl font-bold text-white">About Us</h1>
	</div>
	<p class="mt-4 max-w-[745px] text-xl font-medium text-white">Who R2Bet.com is?</p>
</Header>
<main class="grid gap-y-7 bg-[#F5F5F5] px-48 py-12 text-sm text-[#1E1E1E]">
	<section class="white-container">
		<section>
			<h2 class="text-primary mb-5 text-2xl font-bold">WHAT IS OUR GOAL? WHAT DO YOU GET?</h2>

			<section class="mb-5">
				<h3 class="mb-3 text-xl font-bold">We:</h3>
				<ul class="ml-4 list-disc space-y-3">
					<li>Carefully analyze football matches</li>
					<li>Thoroughly examine upcoming sporting events</li>
					<li>
						Analyze all aspects to make sure the result we predict will be as accurate as possible
					</li>
					<li>Avoid predicting uncertain football matches</li>
					<li>Provide expert picks for our users to make selections</li>
				</ul>
			</section>

			<section>
				<h3 class="mb-3 text-xl font-bold">You:</h3>
				<ul class="ml-4 list-disc space-y-3">
					<li>Receive a complete analysis of upcoming football matches</li>
					<li>Form your ideas and opinions based on our guidance</li>
					<li>Make your bets on single or multiple games</li>
					<li>Increase the success rate of your bets with any bookmaker</li>
					<li>Aren&apos;t spending a lot of time making match forecasts on your own</li>
				</ul>
			</section>
		</section>

		<section class="mt-10 space-y-5">
			<h2 class="text-primary text-2xl font-bold">HOW WE OPERATE?</h2>
			<p>
				Our team of experts offers you complete details concerning upcoming football matches. You
				are not compelled to take all our selections. It is your choice whether to place a bet on
				recommended result. We help you make decisions, which provide real monetary value for you.
				R2bet will increase the success rate of your bets!
			</p>
			<p class="font-bold">R2bet will increase the success rate of your bets!</p>
		</section>
	</section>
</main>
