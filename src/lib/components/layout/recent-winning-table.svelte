<script lang="ts">
	import calendar from '$lib/public/icons/calendar.svg';
	const matches = ['', ''];
</script>

<section class="rounded-[10px] bg-white p-5">
	<section>
		<header class="mb-1">
			<h2 class="text-center text-xl font-bold leading-[47px]">RECENT WINNINGS</h2>
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
				class="bg-primary grid grid-cols-9 rounded-t-lg px-1 py-2.5 text-sm font-bold text-[#F3F3F3]"
			>
				<div class="col-span-1 px-1">Time</div>
				<div class="col-span-4 px-1 text-center">Fixture</div>
				<div class="col-span-2 px-1 text-center">TIP</div>
				<div class="col-span-2 px-1 text-center">Result</div>
			</div>
			{#each matches}
				<div
					class="grid grid-cols-9 items-center px-0.5 text-xs last:rounded-b-lg odd:bg-[#F5F5F5] even:bg-white"
				>
					<div class="col-span-1 truncate px-1">11:04</div>
					<div class="col-span-4 truncate px-1 text-center">
						Club Brugge <span class="font-bold">VS</span> Dendermonde
					</div>
					<div class="col-span-2 truncate bg-[#FFCC0026] px-1 py-3 text-center">BELG</div>
					<div class="col-span-2 truncate text-center">Home or Away (12)</div>
				</div>
			{/each}
		</section>
	</section>
</section>
