<script lang="ts">
	import Logo from '$lib/components/ui/logo.svelte';
	import flag from '$lib/public/icons/flag.svg';
	import chevron from '$lib/public/icons/chevron-down.svg';
	import addAccount from '$lib/public/icons/account-plus.svg';
</script>

<div class="mb-5 flex items-center justify-center">
	<Logo />
</div>

<section class="py-7">
	<h1 class="text-grey-2 mb-7 text-2xl font-medium">Create account</h1>

	<form class="mb-5 grid gap-y-4">
		<div>
			<label for="name" class="text-grey-2 mb-0.5 block text-sm"> Full Name </label>
			<input
				type="text"
				id="name"
				name=""
				class="text-grey-3 w-full rounded-lg border border-[#D9D9D9] px-3 py-4 text-sm"
			/>
		</div>
		<div>
			<label for="email" class="text-grey-2 mb-0.5 block text-sm"> Email Address </label>
			<input
				type="text"
				id="email"
				name=""
				class="text-grey-3 w-full rounded-lg border border-[#D9D9D9] px-3 py-4 text-sm"
			/>
		</div>
		<div class="grid gap-x-2 lg:grid-cols-2">
			<div>
				<label for="phone" class="text-grey-2 mb-0.5 block text-sm"> Phone Number </label>
				<div
					class="text-grey-3 flex w-full overflow-hidden rounded-lg border border-[#D9D9D9] text-sm"
				>
					<div class="flex shrink-0 items-center gap-x-1 bg-[#F5F5F5] px-3 py-4">
						<img src={flag} alt="nigeria flag" width={18} height={18} />
						<p class="text-grey-3 text-sm">+234</p>
					</div>
					<input type="tel" id="phone" name="" class="grow px-2 focus:outline-none" />
				</div>
			</div>
			<div>
				<label for="country" class="text-grey-2 mb-0.5 block text-sm"> Country </label>
				<div
					class="text-grey-3 relative w-full rounded-lg border border-[#D9D9D9] px-3 py-4 text-sm"
				>
					<select name="" id="country" class="appearance-none">
						<option value="">Countries go dey here</option>
					</select>
					<div>
						<img
							src={chevron}
							alt=""
							width={12}
							height={6}
							class="absolute right-3 top-1/2 -translate-y-1/2"
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="grid gap-x-2 lg:grid-cols-2">
			<div>
				<label for="password" class="text-grey-2 mb-0.5 block text-sm"> New Password </label>
				<input
					type="password"
					id="password"
					name=""
					class="text-grey-3 w-full rounded-lg border border-[#D9D9D9] px-3 py-4 text-sm"
				/>
			</div>
			<div>
				<label for="confirm_password" class="text-grey-2 mb-0.5 block text-sm">
					Confirm Password
				</label>
				<input
					type="password"
					id="confirm_password"
					name=""
					class="text-grey-3 w-full rounded-lg border border-[#D9D9D9] px-3 py-4 text-sm"
				/>
			</div>
		</div>

		<button
			class="bg-primary flex w-full items-center justify-center gap-x-2 rounded-full py-4 font-medium text-white"
		>
			Create Account{' '}
			<img src={addAccount} alt="" width={24} height={24} />
		</button>
	</form>
</section>

<p class="font-nunito text-center text-sm">
	Already have an account?{' '}
	<a href="/login" class="text-primary font-semibold underline">LOGIN</a>
</p>
