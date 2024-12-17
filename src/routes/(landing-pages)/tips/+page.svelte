<script lang="ts">
	import Header from '$lib/components/layout/header.svelte';
	import logo from '$lib/public/logo/logo.svg';
	import accountPlus from '$lib/public/icons/account-plus.svg';
	import door from '$lib/public/icons/door.svg';
	import RecentWinningTable from '$lib/components/layout/recent-winning-table.svelte';
	import TipsTable from '$lib/components/layout/TipsTable.svelte';
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
		<span class="text-primary">Tips Store</span>
	</div>

	<TipsTable />
	<RecentWinningTable />
</main>
