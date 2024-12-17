<script lang="ts">
	import BeAWinner from '$lib/components/layout/be-a-winner.svelte';
	import TipsStoreTable from '$lib/components/layout/tips-store-table.svelte';
	import Header from '$lib/components/layout/landing-page-header.svelte';
	import logo from '$lib/public/logo/logo.svg';
	import accountPlus from '$lib/public/icons/account-plus.svg';
	import door from '$lib/public/icons/door.svg';
</script>

<Header>
	<div class="flex items-center gap-x-2">
		<img src={logo} alt="r2bet logo" width={40} height={42.72} />
		<h1 class="text-4xl font-bold text-white">Over 1.5 Goals</h1>
	</div>
	<p class="my-4 text-xl font-medium text-white">
		R2bet.com is a free football prediction tips website and the best of it kind.
	</p>
	<div class="flex gap-x-4">
		<a
			href="/register"
			class="flex gap-x-2 rounded-full border border-white bg-transparent px-6 py-2.5 text-sm font-medium text-white"
		>
			Create Account{' '}
			<img src={accountPlus} alt="" width={22} height={16} />
		</a>
		<a
			href="/login"
			class="flex items-center justify-center gap-x-2 rounded-full bg-primary px-11 py-2.5 font-medium text-white"
		>
			Login <img src={door} alt="" width={24} height={24} />
		</a>
	</div>
</Header>
<main class="grid gap-y-7 bg-[#F5F5F5] px-48 py-12">
	<div class="mb-3 font-medium text-[#B3B3B3]">
		<a href="/">Home {'>'}</a>{' '}
		<span class="text-primary"> Tips Store</span>
	</div>
	<TipsStoreTable />
	<BeAWinner />
	<section class="grid gap-y-9 rounded-[10px] bg-white px-14 py-12 text-sm">
		<article>
			<h2 class="mb-5 text-center text-2xl font-bold text-[#1E1E1E]">
				Over 1.5 Goals and Under 1.5 goals tips
			</h2>

			<div class="grid gap-y-2.5">
				<p>
					R2bet Over 1.5 goals tips / Under 1.5 goals tips, predictions and stats. In this page
					shows best over 1.5 goals tips daily, under/over 1.5 goals market means you are either
					betting on less than 1.5 goals or more than 1.5 goals to be scored in a game.
				</p>
				<p>
					R2bet is one of the most accurate site for over 1.5 goals tips, best over 1.5 goals today,
					surest site for over 1.5 goals prediction.
				</p>
				<p>
					As the sure site for over 1.5 goals tips predictions we make ensure  that we give out the
					latest over 1.5 goal tips daily.
				</p>
				<p>
					When you place on goals scored under 1.5 goals in a match, you win if you score one or
					fewer goals. So, if the game has two or more goals, a tip on more than 1.5 goals will win.
				</p>
			</div>
		</article>

		<article>
			<h2 class="mb-5 text-center text-2xl font-bold text-[#1E1E1E]">
				How to Find Great Over 1.5 and Under Goals 1.5 tips
			</h2>
			<div class="grid gap-y-2.5">
				<p>
					In this business, the odds aren&apos;t always in your favour, so making excellent
					decisions isn&apos;t always easy.
				</p>
				<p>
					Goals suggestions are frequently more appealing to tipsters because they are successful
					throughout the game. As a result, anything under 1.5 could blow up and destroy your
					accumulator at any time.
				</p>
				<p>
					R2bet members can use the Form Streaks page to locate teams in this market that are on a
					winning streak.
				</p>
			</div>
		</article>

		<article>
			<h2 class="mb-5 text-center text-2xl font-bold text-[#1E1E1E]">Over/Under 1.5 Goals Stats</h2>

			<div class="grid gap-y-2.5">
				<p>
					The foundation of effective prediction is precise data, and we&apos;ll provide you with
					everything you need to back up your decisions.
				</p>
				<p>
					Each and every projection in the Over / Under 1.5 target market is supported by detailed
					statistical information indicating the recent trend on both sides of the market and their
					recent results.
				</p>
				<p>
					Our Head-to-Head guide to recent results between the two sides over their last ten
					games-Type Stats-is also available in the drop-down stats bar that accompanies each tip.
				</p>
			</div>
		</article>
	</section>
</main>
