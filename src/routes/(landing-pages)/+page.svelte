<script lang="ts">
	import RecentWinningTable from '$lib/components/layout/recent-winning-table.svelte';
	import TipsTable from '$lib/components/layout/TipsTable.svelte';
	import BeAWinner from '$lib/components/layout/be-a-winner.svelte';
	import today from '$lib/public/icons/today.svg';
	import upgrade from '$lib/public/icons/upgrade.svg';
	import telegram from '$lib/public/icons/telegram-colored.svg';
	import Header from '$lib/components/layout/landing-page-header.svelte';
	import logo from '$lib/public/logo/logo.svg';
	import accountPlus from '$lib/public/icons/account-plus.svg';
	import door from '$lib/public/icons/door.svg';
	import vipPackage from '$lib/public/images/vip-package.jpg';
	import howToPlay from '$lib/public/images/how-to-play.jpg';
	import calendar from '$lib/public/icons/calendar.svg';

	let activeOption = $state(0);
	const tipOptions = ['Today', 'Yesterday', 'Tomorrow'];
</script>

<Header>
	<section class="flex items-end gap-x-4">
		<div
			class="flex h-[305.44px] w-[260px] items-end rounded-3xl bg-[#11000050] bg-cover bg-no-repeat px-6 pb-5 bg-blend-overlay"
			style="background-image: url({vipPackage});"
		>
			<div class="font-nunito text-white">
				<h3 class="mb-7 text-2xl font-bold">VIP Package</h3>
				<a href="/vip-pricing" class="flex items-center gap-x-2 text-sm text-[#E8ECF3]"
					>View <svg
						width="16"
						height="13"
						viewBox="0 0 16 13"
						fill="none"
						class="h-3 w-3"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0.984375 6.39359H3.09874M14.5163 6.39359L9.44182 1.31912M14.5163 6.39359L9.44182 11.4681M14.5163 6.39359H5.63597"
							stroke="#E8ECF3"
							stroke-width="1.26862"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</a>
			</div>
		</div>
		<div
			class="flex h-[305.44px] w-[260px] items-end rounded-3xl bg-[#11000050] bg-cover bg-no-repeat px-6 pb-5 bg-blend-overlay"
			style="background-image: url({howToPlay});"
		>
			<div class="font-nunito text-white">
				<h3 class="mb-7 text-2xl font-bold">How to Play</h3>
				<a href="/vip-pricing" class="flex items-center gap-x-2 text-sm text-[#E8ECF3]"
					>View <svg
						width="16"
						height="13"
						viewBox="0 0 16 13"
						fill="none"
						class="h-3 w-3"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0.984375 6.39359H3.09874M14.5163 6.39359L9.44182 1.31912M14.5163 6.39359L9.44182 11.4681M14.5163 6.39359H5.63597"
							stroke="#E8ECF3"
							stroke-width="1.26862"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</a>
			</div>
		</div>

		<div class="max-w-[581px] px-8 py-4">
			<div class="flex items-start gap-x-2 text-4xl font-bold text-white">
				<img src={logo} alt="r2bet logo" width={40} height={42.72} />
				<span>Accurate Football Predictions!</span>
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
		</div>
	</section>
</Header>
<main class="flex flex-col gap-y-7 bg-[#F5F5F5] px-48 py-12">
	<section class="rounded-lg bg-white px-8 py-6">
		<h2 class="mb-2.5 text-2xl font-bold text-[#1E1E1E]">MATCH PREVIEW</h2>

		<div class="relative grid grid-cols-3 gap-x-4">
			<button
				aria-label="prev"
				class="absolute -left-6 top-1/2 flex h-5 w-5 shrink-0 -translate-y-1/2 items-center justify-center gap-2 rounded-full border-2 border-primary bg-primary/20 text-primary"
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
			<article class="h-[189px] rounded-lg bg-black/40"></article>
			<article class="h-[189px] rounded-lg bg-black/40 bg-no-repeat bg-blend-overlay"></article>
			<article class="h-[189px] rounded-lg bg-black/40 bg-no-repeat bg-blend-overlay"></article>
			<button
				aria-label="next"
				class="absolute -right-6 top-1/2 flex h-5 w-5 shrink-0 -translate-y-1/2 items-center gap-2 rounded-full border-2 border-primary bg-primary/20 text-primary"
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
	</section>

	<div class="flex gap-x-2.5">
		<section class="rounded-lg bg-white p-3">
			<section class="flex max-h-[492px] gap-x-2.5 overflow-hidden p-2">
				<div>
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
				</div>
				<section class="no-scrollbar grow overflow-y-auto p-2.5">
					<header class="mb-1">
						<h2 class="text-center text-xl font-bold leading-[47px]">FREE SOCCER PICKS</h2>

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
							class="grid grid-cols-12 rounded-t-lg bg-primary px-1 py-2.5 text-sm font-bold text-[#F3F3F3]"
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
					<section class="item-center my-5 flex justify-end gap-x-2.5">
						<button
							class="flex items-center gap-x-2 rounded-full bg-[#1e1e1e] px-6 py-2.5 text-xs font-semibold text-white"
							>Today Banker <img src={today} alt="" width="12" height="12" /></button
						>
						<button
							class="flex items-center gap-x-2 rounded-full bg-[#FF9500] px-6 py-2.5 text-xs font-semibold text-white"
							>Upgrade to VIP <img src={upgrade} alt="" width="12" height="12" /></button
						>
					</section>
					<section class="bg-[#2AABEE1A] py-1.5 text-center text-[10px]">
						<p class="mb-2">Join Our Telegram Channel for Sure Daily Free Football Predictions!!</p>
						<button
							class="mx-auto flex items-center gap-x-2 rounded-full bg-[#D9DCE3] px-6 py-2.5 text-xs font-semibold text-[#303030]"
							>Click to Join <img src={telegram} alt="" width="17" height="17" /></button
						>
					</section>
				</section>
			</section>
		</section>

		<!-- <img src= alt="" width={452} /> -->
		<div class="w-[452px] rounded-lg bg-gray-400"></div>
	</div>

	<BeAWinner />

	<section class="rounded-lg bg-white">
		<TipsTable />
	</section>

	<RecentWinningTable />

	<section class="grid gap-y-9 rounded-[10px] bg-white px-14 py-12 text-sm">
		<section>
			<article class="mb-10">
				<h2 class="mb-5 text-center text-2xl font-bold text-[#1E1E1E]">
					FREE FOOTBALL PREDICTION SITE
				</h2>
				<div class="grid gap-y-2.5">
					<p>
						R2bet.com is a free football prediction tips website and the best prediction site. R2bet
						is the best site when you are searching for the free football betting tips and
						prediction sites.
					</p>
					<p>
						We are charge with the duty of providing accurate football predictions for today&apos;s
						tips, including top soccer predictions, and over 3.5 goals predictions for today and
						tomorrow.
					</p>
					<p>
						R2bet does not only gives football predictions, we are also at the verge of teaching the
						world how to predict football matches correctly. All of our best over 2.5 soccer
						prediction are collected by experienced soccer predictors who have a bigger of Football
						prediction experience. And knowledge when it comes to soccer predict.
					</p>
					<p>
						R2bet, one of the top sure football prediction sites in the World Wide Web, provides the
						most updated. A well-researched football betting tips, winning goal predictions and
						soccer team picks to its members.
					</p>
				</div>
			</article>

			<article class="grid gap-y-2.5">
				<h3 class="text-base font-bold">Accurate football prediction website</h3>
				<p>
					R2bet.com is an Accurate football prediction website. We can help you keep your winning
					streak going strong with accurate, and current soccer predictions. And by current we mean
					you will get today&apos;s soccer tips fresh off the ball.
				</p>
				<p>
					We optimise our soccer predictions and tips for maximum flexibility and convenience, with
					categories catering to different markets. Such as both teams to score (BTTS), over 1.5,
					over 2.5 goals, over 3.5 goals, 1st half goals, double chance, fulltime handicap,
					accumulators, Chance Mix, Combo, highest scoring half, win either half, win both halves,
					correct scores and many more.
				</p>
				<p>
					Use our Surest football predictions backed by numbers and experts to keep your money safe
					and make it grow, accurate football prediction, banker of the day, solo predict, solo
					predictions, merit prediction, confirm bet prediction, best football prediction and pick
					of the day.
				</p>
				<p>
					You might love to take a look at the full description of football prediction on wikipedia
				</p>
				<p>
					Football bets is fun, but without some level of knowledge and guidance, it can be a
					high-risk venture. Soccer fans looking for websites that offer accurate forecasts go
					straight to the best football prediction site in the world R2bet.com.
				</p>
			</article>
		</section>

		<article>
			<h2 class="mb-5 text-center text-2xl font-bold text-[#1E1E1E]">
				Best Prediction Site For Football
			</h2>
			<div class="grid gap-y-2.5">
				<p>
					R2bet.com is the best prediction website, we also work hard all day to make sure that all
					the tips we give are going through the hands of experts before they are released.
				</p>
				<p>
					R2bet is a top football prediction website that guarantees real football predictions on
					every market available. Every day of the week, our team of expert analysts and
					statisticians are working tirelessly to guarantee our daily returns.
				</p>
				<p>
					You can also get matches prediction tips here on our website today, which you can easily
					play on. Join our tips community and share your football match predictions by making your
					own choices.
				</p>
				<p>Bet88 deneme bonusu veren yeni siteler</p>
			</div>
		</article>

		<article>
			<h2 class="mb-5 text-center text-2xl font-bold text-[#1E1E1E]">
				What Site Is The Best For Football prediction?
			</h2>
			<div class="grid gap-y-2.5">
				<p>
					Many tipsters/punters failed because they didn’t cross-check some prediction sites.
					Although it takes some time, it is wise to check these types of websites through a
					trustworthy third-party website and put them on the recommended websites list.
				</p>
				<p>
					When you can’t find any, you can say by your own that R2bet.com is the best for sure
					football prediction.
				</p>
				<p>
					That will be enough to get the beginners to know exactly how the predictions in football
					today work. And just enough for the doubt to see how correct our predictions for football
					today are.
				</p>
				<p>
					At R2bet, we provide daily predictions on all matches played today, latest football
					prediction. Also predictions for tomorrows football, soccer prediction site, best football
					tips for today, free nfl expert picks, soccer picks today.
				</p>
				<p>
					However, there is no day you visit our site that we wouldn&apos;t have today&apos;s match
					prediction ready for you. This is why R2bet is rated among the top soccer prediction site
					with sure bet prediction.
				</p>
			</div>
		</article>
	</section>
</main>
