<script lang="ts">
	import PaidCard from '../ui/paid-card.svelte';
	import calendar from '$lib/public/icons/calendar.svg';

	let activeOption = $state(0);
	const tipOptions = ['Today', 'Yesterday', 'Tomorrow'];
</script>

<section class="flex max-h-[492px] gap-x-2.5 overflow-hidden bg-white p-5">
	<aside
		class="custom-shadow no-scrollbar flex h-full w-[163px] shrink-0 flex-col items-start overflow-y-auto rounded-lg py-3"
	>
		{#each tipOptions as option, i}
			<button
				class={`${activeOption === i ? 'border-primary text-primary' : 'border-white text-[#303030]'} border-l-[5px] px-5 py-3 text-xs font-medium`}
				onclick={() => (activeOption = i)}
			>
				{option}
			</button>
		{/each}
	</aside>
	<section class="no-scrollbar grow overflow-y-auto p-2.5">
		<header class="mb-1">
			<h2 class="text-center text-xl font-bold leading-[47px]">1.5 Goals</h2>

			<div class="flex items-center justify-center gap-x-2">
				<p>23 November 2024</p>
				<div class="flex items-center gap-x-2">
					<button aria-label="prev">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="-rotate-180"
						>
							<path d="M9 18l6-6-6-6" />
						</svg>
					</button>
					<img src={calendar} alt="" width={24} height={24} />
					<button aria-label="next">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M9 18l6-6-6-6" />
						</svg>
					</button>
				</div>
			</div>
		</header>
		<section class="grid">
			<div
				class="bg-primary grid grid-cols-12 rounded-t-lg px-1 py-2.5 text-sm font-bold text-[#F3F3F3]"
			>
				<div class="col-span-1 px-1">Time</div>
				<div class="col-span-4 px-1">League</div>
				<div class="col-span-3 px-1 text-center">Fixture</div>
				<div class="col-span-4 px-1 text-center">TIP</div>
			</div>
			{#each ['', ''] as match}
				<div
					class="grid grid-cols-12 px-0.5 py-3 text-xs last:rounded-b-lg odd:bg-[#F5F5F5] even:bg-white"
				>
					<div class="col-span-1 truncate px-1">11:04</div>
					<div class="col-span-4 truncate px-1">BELG</div>
					<div class="col-span-3 truncate px-1 text-center">Club Brugge VS Dendermonde</div>
					<div class="col-span-4 truncate text-center">Home or Away (12)</div>
				</div>
			{/each}
		</section>

		<section class="mt-2.5 grid grid-cols-3 gap-x-3.5 border-t border-[#D9D9D9] pt-3">
			<PaidCard type="SUPER VIP" />
			<PaidCard type="PREMIUM VIP" />
			<PaidCard type="MEGA VIP" />
		</section>
	</section>
</section>
