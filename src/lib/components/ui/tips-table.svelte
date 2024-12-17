<script lang="ts">
	import calendar from '$lib/public/icons/calendar.svg';

	let activeOption = $state(0);
	const tipOptions = [
		'Over 1.5 Goals',
		'Over 2.5 Goals',
		'Double Chance',
		'Win Either half',
		'GG/BTTS',
		'Draw No Bet',
		'HT/FT',
		'Draws',
		'Under 3.5 Goals',
		'Handicap',
		'0.5 Goals (HT)',
		'Bet of the Day'
	];
</script>

<section class="flex h-[492px] gap-x-2.5 overflow-hidden p-1">
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
			<div class="flex items-center justify-between">
				<button
					aria-label="prev"
					class="border-primary bg-primary/20 text-primary flex h-6 w-6 shrink-0 items-center justify-center gap-2 rounded-full border-2"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="-ml-0.5 rotate-90"
					>
						<path
							d="M6 9L12 15L18 9"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
				<h2 class="text-xl font-bold leading-[47px]">
					FREE TIPS - <span class="text-primary">1.5 Goals</span>
				</h2>
				<button
					aria-label="next"
					class="border-primary bg-primary/20 text-primary flex h-6 w-6 shrink-0 items-center gap-2 rounded-full border-2"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="-mr-0.5 -rotate-90"
					>
						<path
							d="M6 9L12 15L18 9"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</div>
			<div class="flex items-center justify-center gap-x-2">
				<p>23 November 2024</p>
				<div class="flex items-center gap-x-2">
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
							class="-rotate-180"
						>
							<path d="M9 18l6-6-6-6" />
						</svg>
					</button>
					<img src={calendar} alt="" width={24} height={24} />
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
			{#each ['', '']}
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
	</section>
</section>
