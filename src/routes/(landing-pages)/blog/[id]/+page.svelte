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
		<a href="/">Home {'>'}</a>{' '}
		<a href="/blog">Blog {'>'}</a>{' '}
		<span class="text-primary"> Liverpool</span>
	</div>

	<div class="space-y-20">
		<section class="custom-shadow rounded-[10px] bg-white p-1">
			<h2 class="max-w-[813px] px-8 py-6 text-3xl font-bold">
				Slot insists Salah is not distracted despite contract comments
			</h2>
			<div class="relative h-[357px]">
				<img
					src={news}
					alt=""
					class="h-full w-full bg-top object-cover"
					style="object-position: top;"
				/>
			</div>
			<p class="mb-5 px-16 py-8 text-[#303030]">
				Mohamed Salah has been making headlines for his performances on the pitch and contract
				situation off it - but he looks primed to have a big say against Real Madrid in the
				Champions League, says Sky Sports' Peter Smith.
			</p>
		</section>
	</div>
</main>
