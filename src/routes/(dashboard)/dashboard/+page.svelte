<script lang="ts">
	import VIPPackage from '$lib/components/layout/VipPackage.svelte';
	import AccountOverview from '$lib/components/layout/AccountOverview.svelte';
	import TipCategories from '$lib/components/layout/TipsCategories.svelte';
</script>

<div class="mb-6 grid grid-cols-2 gap-x-5">
	<VIPPackage />
	<AccountOverview />
</div>
<TipCategories />
