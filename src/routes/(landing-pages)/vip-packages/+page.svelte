<script lang="ts">
	import Header from '$lib/components/layout/header.svelte';
	import logo from '$lib/public/logo/logo.svg';
	import accountPlus from '$lib/public/icons/account-plus.svg';
	import door from '$lib/public/icons/door.svg';
	import VIPPlanCard from '$lib/components/ui/VipPlanCard.svelte';
	import PriceCard from '$lib/components/ui/PriceCard.svelte';
</script>

<Header>
	<div class="flex items-center gap-x-2">
		<img src={logo} alt="r2bet logo" width={40} height={42.72} />
		<h1 class="text-4xl font-bold text-white">VIP Pricing</h1>
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
			class="bg-primary flex items-center justify-center gap-x-2 rounded-full px-11 py-2.5 font-medium text-white"
		>
			Login <img src={door} alt="" width={24} height={24} />
		</a>
	</div>
</Header>
<main class="grid gap-y-7 bg-[#F5F5F5] px-48 py-12">
	<div class="mb-3 font-medium text-[#B3B3B3]">
		<a href="/"> Home {'>'}</a>{' '}
		<span class="text-primary"> VIP Pricing</span>
	</div>

	<section class="flex items-start justify-between gap-x-5 rounded-[10px] bg-white p-6">
		<VIPPlanCard planType={{ color: '#003617E0', type: 'SUPER VIP PLANS' }} />
		<div class="grid grow gap-x-5 lg:grid-cols-2">
			<PriceCard />
			<PriceCard />
		</div>
	</section>
	<section class="flex items-start justify-between gap-x-5 rounded-[10px] bg-white p-6">
		<VIPPlanCard planType={{ color: '#836939E5', type: 'PREMIUM VIP PLANS' }} />
		<div class="grid grow gap-x-5 lg:grid-cols-2">
			<PriceCard />
			<PriceCard />
		</div>
	</section>
	<section class="flex items-start justify-between gap-x-5 rounded-[10px] bg-white p-6">
		<VIPPlanCard planType={{ color: '#3D2B00E8', type: 'MEGA VIP PLANS' }} />
		<div class="grid grow gap-x-5 lg:grid-cols-2">
			<PriceCard />
			<PriceCard />
		</div>
	</section>
	<section class="flex items-start justify-between gap-x-5 rounded-[10px] bg-white p-6">
		<VIPPlanCard planType={{ color: '#172B85AD', type: 'INVESTMENT PLANS' }} />
		<div class="grid grow gap-x-5 lg:grid-cols-2">
			<PriceCard />
			<PriceCard />
		</div>
	</section>
</main>
