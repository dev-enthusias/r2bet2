<script lang="ts">
	import vipImage from '$lib/public/images/vip.png';
	import crown from '$lib/public/icons/crown.png';
	import bg from '$lib/public/images/vip-image.jpg';
	export let planType = { color: '', type: '' };
</script>

<article
	class="font-space-grotesk relative flex w-[390px] shrink-0 items-center justify-between overflow-hidden rounded-[10px] bg-[#003617E0] bg-cover bg-no-repeat py-5 pb-7 pl-10 pr-5 pt-12 text-white"
	style="background-image: url({bg});"
>
	<div class="z-10">
		<h3 class="mb-1 text-2xl font-medium">{planType.type}</h3>
		<p class="mb-1 text-sm">Duration: Weekly & Monthly</p>
		<div class="h-[3px] w-[37px] bg-[#FDBE11]"></div>
	</div>
	<div class="z-10">
		<img src={vipImage} alt="" width={80.98} height={71} />
	</div>
	<div
		class="absolute left-0 top-0 z-10 flex items-center gap-x-1 rounded-br-[22.19px] rounded-tl-[10px] bg-gradient-to-r from-[#B28200] to-[#5E4500] py-1 pl-2 pr-4 text-[13px] font-medium"
	>
		<img src={crown} alt="" width={17} height={17} />
		PREMIUM
	</div>
	<div class="absolute left-0 top-0 z-0 h-full w-full" style="background: {planType.color};"></div>
</article>
