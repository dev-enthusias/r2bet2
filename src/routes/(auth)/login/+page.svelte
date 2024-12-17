<script lang="ts">
	import Logo from '$lib/components/ui/logo.svelte';
	import arrow from '$lib/public/icons/arrow.svg';
</script>

<div class="mb-5 flex items-center justify-center">
	<Logo />
</div>

<section class="py-7">
	<h1 class="text-grey-2 mb-7 text-2xl font-medium">Login to your account</h1>

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
		<div>
			<label for="password" class="text-grey-2 mb-0.5 block text-sm"> Password </label>
			<input
				type="password"
				id="password"
				name=""
				class="text-grey-3 w-full rounded-lg border border-[#D9D9D9] px-3 py-4 text-sm"
			/>
		</div>
		<div class="flex items-center justify-between">
			<div class="flex gap-x-3.5">
				<input type="checkbox" />
				<p>Remember Me</p>
			</div>
			<a href="/reset-password" class="inline-block text-sm font-medium text-[#FF3B30]">
				Lost Password?
			</a>
		</div>

		<button
			class="bg-primary flex w-full items-center justify-center gap-x-2 rounded-full py-4 font-medium text-white"
		>
			Log In{' '}
			<img src={arrow} alt="" width={24} height={24} />
		</button>
	</form>
</section>

<p class="font-nunito text-center text-sm">
	Don&apos;t have an account?{' '}
	<a href="/register" class="text-primary font-semibold underline">REGISTER</a>
</p>
