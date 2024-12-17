<script lang="ts">
	import logo from '$lib/public/logo/logo.svg';
	import SocialLinks from '$lib/components/layout/social-link.svelte';
	import NavigationMenu from '$lib/components/layout/navigation-menu.svelte';
	import Sponsors from '$lib/components/layout/sponsors.svelte';
	import visa from '$lib/public/logo/visa.png';
	import mastercard from '$lib/public/logo/mastercard.png';
	import mtn from '$lib/public/logo/mtn.png';
	import bank from '$lib/public/logo/bank.png';
	import bitcoin from '$lib/public/logo/bitcoin.png';
	import email from '$lib/public/icons/email.svg';
	import phone from '$lib/public/icons/Phone.svg';

	let { children } = $props();
</script>

<header class="shrink-0">
	<SocialLinks />
	<NavigationMenu />
	<Sponsors />
</header>

{@render children()}

<footer class="bg-white px-3.5 py-12">
	<section class="mx-auto flex max-w-[1128px] gap-x-20 gap-y-8 sm:justify-center">
		<div class="max-w-[333px]">
			<div class="mb-10 flex items-start gap-x-2.5 text-sm">
				<div class="relative h-[42.72px] w-[40px] shrink-0">
					<img src={logo} alt="logo" class="object-cover" />
				</div>
				<p>
					R2bet is the best site when you are searching for the free football betting tips and
					prediction sites.
				</p>
			</div>
		</div>
		<div class="shrink-0">
			<h3 class="text-primary mb-5 text-lg font-medium">Quick Links</h3>
			<ul class="grid gap-y-3 text-sm text-[#757575]">
				<li><a href="/tips-store">Tips Store</a></li>
				<li><a href="/contact-us">Contact Us</a></li>
				<li><a href="/about-us">About Us</a></li>
			</ul>
		</div>
		<div class="shrink-0">
			<h3 class="text-primary mb-5 text-lg font-medium">Important</h3>
			<ul class="grid gap-y-3 text-sm text-[#757575]">
				<li><a href="/disclaimer">Disclaimer</a></li>
				<li><a href="/privacy-policy">Privacy Policy</a></li>
				<li><a href="/faqs">FAQs</a></li>
				<li><a href="/partners">Partners</a></li>
			</ul>
		</div>
		<div>
			<h3 class="text-primary mb-5 text-lg font-medium">Contact Us</h3>
			<ul class="grid gap-y-3 text-sm text-[#757575]">
				<li>For Subscriptions / gerneral enquiries:</li>
				<li class="flex items-center gap-x-2">
					<img src={email} alt="" />
					contact@tips100.com
				</li>
				<li class="flex items-center gap-x-2">
					<img src={phone} alt="" />
					+234 1232 213123 1321
				</li>
			</ul>
		</div>
	</section>

	<section class="mx-auto my-7 max-w-[1128px] lg:my-14">
		<h3 class="mb-2.5 text-center text-sm font-medium">PAYMENT METHODS WE ACCEPT</h3>
		<section class="flex items-center gap-x-5">
			<div class="grow border border-[#D9D9D9]"></div>
			<div class="flex flex-wrap items-center justify-center gap-x-4">
				<img src={visa} alt="Visa" />
				<img src={mastercard} alt="mastercard" />
				<img src={mtn} alt="mtn" />
				<img src={bank} alt="Payment by bank" />
				<img src={bitcoin} alt="Bitcoin" />
			</div>
			<div class="grow border border-[#D9D9D9]"></div>
		</section>
	</section>

	<div class="text-sm text-[#757575]">
		<p class="text-center text-sm">Copyright © 2024 r2bet.com</p>
	</div>
</footer>
