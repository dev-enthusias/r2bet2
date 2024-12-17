<script lang="ts">
	import crown from '$lib/public/icons/crown.png';
	let { type } = $props();
</script>

<article class="relative rounded-xl bg-gradient-to-r from-[#303030] to-[#000000] py-6 text-white">
	<h3 class="text-center font-medium">{type}</h3>
	<div
		class="absolute left-0 top-0 z-10 flex items-center gap-x-1 rounded-br-[22.19px] rounded-tl-[10px] bg-gradient-to-r from-[#B28200] to-[#5E4500] py-1 pl-2 pr-4 text-[13px] font-medium"
	>
		<img src={crown} alt="" width={17} height={17} />
		Paid
	</div>
</article>
