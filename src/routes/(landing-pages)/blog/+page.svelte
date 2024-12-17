<script lang="ts">
	import Header from '$lib/components/layout/header.svelte';
	import logo from '$lib/public/logo/logo.svg';
	import news from '$lib/public/images/news.png';
</script>

<Header>
	<div class="flex items-center gap-x-2">
		<img src={logo} alt="r2bet logo" width={40} height={42.72} />
		<h1 class="text-4xl font-bold text-white">Latest News Update</h1>
	</div>
	<p class="my-4 text-xl font-medium text-white">
		R2bet.com is a free football prediction tips website and the best of it kind.
	</p>
</Header>
<main class="font-lato grid gap-y-7 bg-[#F5F5F5] px-48 py-12 text-[#1e1e1e]">
	<div class="mb-3 font-medium text-[#B3B3B3]">
		<a href="/"> Home {'>'}</a>{' '}
		<span class="text-primary"> Blog</span>
	</div>

	<div class="space-y-20">
		<section class="flex rounded-[10px] bg-white p-1">
			<div class="relative h-[357px] w-[613px] shrink-0 overflow-hidden rounded-l-[10px]">
				<img src={news} alt="" class="h-full w-full object-cover" />
			</div>
			<div class="flex grow items-center px-6">
				<div>
					<span class="py-0.2 bg-primary mb-5 inline-block px-1 text-xs font-medium text-[#F3F3F3]">
						Football
					</span>
					<h2 class="border-primary mb-5 border-l-[3px] pl-2.5 text-3xl font-bold">
						Slot insists Salah is not distracted despite contract comments
					</h2>
					<p class="mb-5 text-sm text-[#303030]">
						Mohamed Salah is not distracted despite publicly saying he was not happy about his
						Liverpool contract situation, insists Arne Slot.
					</p>
					<a href="/blogs" class="flex items-center gap-x-2 text-sm">
						Read More{' '}
						<svg
							width="16"
							height="13"
							viewBox="0 0 16 13"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.984375 6.39359H3.09874M14.5163 6.39359L9.44182 1.31912M14.5163 6.39359L9.44182 11.4681M14.5163 6.39359H5.63597"
								stroke="#303030"
								stroke-width="1.26862"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</a>
				</div>
			</div>
		</section>

		<section>
			<h2 class="mb-10 text-3xl font-bold">Latest News</h2>
			<div class="grid grid-cols-3 gap-x-5 gap-y-10">
				{#each ['', '', '', '', '', '']}
					<article
						class="oveflow-hidden rounded-lg bg-white p-[3px]"
						style="boxShadow: '0px 1px 7.7px  0 #00000026'"
					>
						<div class="h-[178.5px] rounded-t-lg bg-gray-400"></div>

						<div class="px-6 py-9">
							<span
								class="py-0.2 bg-primary mb-5 inline-block px-1 text-xs font-medium text-[#F3F3F3]"
							>
								NPL
							</span>
							<h2 class="border-primary border-l-[3px] pl-2.5 text-xl font-bold">
								Nigeria Football Club Officially launches its websites with amazing features
							</h2>
						</div>
					</article>
				{/each}
			</div>
		</section>

		<section class="px-8 py-10">
			<h2 class="mb-10 text-3xl font-bold">Latest News</h2>
			<div class="grid grid-cols-3 gap-x-5 gap-y-10">
				{#each ['', '', '']}
					<article class="rounded-lg">
						<div
							class="h-[255px] rounded-t-lg bg-white"
							style="boxShadow: '0px 1px 7.7px  0 #00000026'" 
						></div>

						<div class="px-3.5 py-5">
							<h2 class="border-primary pl-2.5 text-lg">
								Nigeria Football Club Officially launches its websites with amazing features
							</h2>
						</div>
					</article>
				{/each}
			</div>

			<div class="mt-2.5 flex justify-end gap-x-8">
				<button
					aria-label="prev"
					class="border-primary bg-primary/20 text-primary flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full border-2"
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
				<button
					aria-label="next"
					class="border-primary bg-primary/20 text-primary flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full border-2"
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
	</div>
</main>
