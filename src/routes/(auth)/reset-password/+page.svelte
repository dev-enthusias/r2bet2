<script lang="ts">
	import Logo from '$lib/components/ui/logo.svelte';
	import arrow from '$lib/public/icons/arrow.svg';
	import reset from '$lib/public/icons/fluent_password-reset.svg';
</script>

<div class="mb-5 flex items-center justify-center">
	<Logo />
</div>

<section class="py-7">
	<h1 class="text-grey-2 mb-7 text-2xl font-medium">Reset Password</h1>

	<form class="mb-5 grid gap-y-4">
		<div>
			<label for="email" class="text-grey-2 mb-0.5 block text-sm"> Email Address </label>
			<input
				type="text"
				id="email"
				name=""
				class="text-grey-3 w-full rounded-lg border border-[#D9D9D9] px-3 py-4 text-sm"
			/>
		</div>

		<button
			class="bg-primary flex w-full items-center justify-center gap-x-2 rounded-full py-4 font-medium text-white"
		>
			Send Reset Link{' '}
			<img src={reset} alt="" width="24" height="24" />
		</button>
	</form>
</section>

<p class="font-nunito text-center text-sm">
	Remembered Password?{' '}
	<a href="/login" class="text-primary font-semibold underline">LOGIN</a>
</p>
