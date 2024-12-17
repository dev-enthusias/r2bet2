<script lang="ts">
	const { question, answer, index } = $props();
</script>

<article class="flex items-start gap-x-6 rounded-[10px] bg-white px-14 py-7">
	<section>
		<div class="text-primary mb-2.5 flex gap-x-2 text-lg font-bold">
			<span>{index}.</span>
			<h3>{question}</h3>
		</div>
		<p class="text-[#1E1E1E]">{answer}</p>
	</section>
	<svg
		width="16"
		height="13"
		viewBox="0 0 16 13"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class="h-7 w-7 shrink-0 rotate-90"
	>
		<path
			d="M0.984375 6.39359H3.09874M14.5163 6.39359L9.44182 1.31912M14.5163 6.39359L9.44182 11.4681M14.5163 6.39359H5.63597"
			stroke="#1E1E1E"
			stroke-width="1.13"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</article>
