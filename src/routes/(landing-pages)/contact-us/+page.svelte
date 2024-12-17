<script lang="ts">
	import Header from '$lib/components/layout/header.svelte';
	import logo from '$lib/public/logo/logo.svg';
	import whatsapp from '$lib/public/icons/whatsapp.svg';
	import email from '$lib/public/icons/emoji-email.svg';
	import world from '$lib/public/icons/world.svg';
	import x from '$lib/public/icons/grey-x.svg';
	import linkedin from '$lib/public/icons/grey-linkedin.svg';
	import instagram from '$lib/public/icons/grey-instagram.svg';
	import facebook from '$lib/public/icons/grey-facebook.svg';
</script>

<Header>
	<div class="flex items-center gap-x-2">
		<img src={logo} alt="r2bet logo" width={40} height={42.72} />
		<h1 class="text-4xl font-bold text-white">Contact Us</h1>
	</div>
	<p class="mt-4 max-w-[745px] text-xl font-medium text-white">
		R2bet offers you all the best football Predictions and betting tips at your reach.
	</p>
</Header>

<main class="grid gap-y-7 bg-[#F5F5F5] px-48 py-12">
	<section class="white-container">
		<h2 class="text-primary mb-7 border-b border-[#E9F2ED] pb-1 text-3xl font-bold">
			Contact Information
		</h2>

		<section class="max-w-[430px] space-y-8">
			<div>
				<ul class="grid gap-y-2.5">
					<li class="flex">
						<div class="flex grow gap-x-3 font-bold">
							<img src={whatsapp} alt="" width={24} height={24} />
							Whatsapp
						</div>
						<p class="shrink-0 font-medium">Ismail Daniel</p>
					</li>
					<li class="flex">
						<div class="flex grow gap-x-3 font-bold">
							<img src={email} alt="" width={24} height={24} />
							Email
						</div>
						<p class="shrink-0 font-medium">r2bet.com</p>
					</li>
					<li class="flex">
						<div class="flex grow gap-x-3 font-bold">
							<img src={world} alt="" width={24} height={24} />
							Website
						</div>
						<p class="shrink-0 font-medium">www.r2bet.com</p>
					</li>
				</ul>
			</div>
			<div class="flex gap-x-6 text-sm text-[#757575]">
				<div class="flex items-center gap-x-2">
					<img src={x} alt="x logo" width={21} height={21} />
					Twitter
				</div>
				<div class="flex items-center gap-x-2">
					<img src={linkedin} alt="x logo" width={21} height={21} />
					Linkedin
				</div>
				<div class="flex items-center gap-x-2">
					<img src={instagram} alt="x logo" width={21} height={21} />
					Instagram
				</div>
				<div class="flex items-center gap-x-2">
					<img src={facebook} alt="x logo" width={21} height={21} />
					Facebook
				</div>
			</div>
		</section>
	</section>
</main>
