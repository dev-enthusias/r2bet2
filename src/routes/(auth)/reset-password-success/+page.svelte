<script lang="ts">
	import Logo from '$lib/components/ui/logo.svelte';
	import email from '$lib/public/icons/email.svg';
</script>

<div class="mb-5 flex items-center justify-center">
	<Logo />
</div>

<section class="py-7">
	<h1 class="text-grey-2 mb-4 text-2xl font-medium">Reset Link Sent</h1>

	<p class="mb-7 text-sm font-semibold text-[#1E1E1E]">
		We have sent instructions on how to reset your password to abc@example.com
	</p>

	<p class="mb-10 flex items-center gap-x-2">
		Check Mailbox{' '}
		<img src={email} alt="" width="24" height="21" />
	</p>

	<a
		href="/login"
		class="text-primary flex w-full items-center justify-center gap-x-2 rounded-full py-4 font-medium"
	>
		<svg
			width="16"
			height="13"
			viewBox="0 0 16 13"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="-rotate-180"
		>
			<path
				d="M0.984375 6.39359H3.09874M14.5163 6.39359L9.44182 1.31912M14.5163 6.39359L9.44182 11.4681M14.5163 6.39359H5.63597"
				stroke="currentColor"
				stroke-width="1.26862"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>

		Log In
	</a>
</section>
