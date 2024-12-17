<script lang="ts">
	import door from '$lib/public/icons/door.svg';
</script>

<article class="rounded-[10px] bg-white p-6 font-bold">
	<h3 class="mb-5 border-b border-b-[#E9F2ED] pb-2 text-xl text-[#1E1E1E]">Your VIP Package</h3>
	<p class="mb-5 text-lg text-[#FF3B30]">YOU DO NOT CURRENTLY HAVE A RUNNING SUBSCRIPTION PLAN</p>
	<p class="text-sm text-[#1E1E1E]">Don&apos;t miss out on our VIP Tips!</p>

	<button
		class="mt-12 flex w-fit items-center gap-x-2 rounded-full bg-[#FF9500] px-7 py-2.5 text-sm font-bold text-white"
	>
		JOIN VIP MEMBERSHIP{' '}
		<img src={door} alt="" width={24} height={24} />
	</button>
</article>
