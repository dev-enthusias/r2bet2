<script lang="ts">
	import VIPPlanCard from '$lib/components/ui/VipPlanCard.svelte';
	import PriceCard from '$lib/components/ui/PriceCard.svelte';
</script>

<section class="mb-8 rounded bg-[#2C2C2C] px-1 py-2.5 text-center font-bold text-[#F3F3F3]">
	<h1>VIP PRICES</h1>
</section>

<div class="grid gap-y-7">
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
</div>
