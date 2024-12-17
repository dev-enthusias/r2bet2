<script lang="ts">
	import avatar from '$lib/public/images/avatar.png';
	import chevron from '$lib/public/icons/chevron-down.svg';
	import save from '$lib/public/icons/save.svg';
	import flag from '$lib/public/icons/flag.svg';
</script>

<article class="rounded-[10px] bg-white p-6">
	<h1 class="mb-7 border-b border-b-[#E9F2ED] pb-2 text-xl font-bold">Account Details</h1>

	<section class="mx-auto max-w-[588px]">
		<div class="mb-6 flex justify-center">
			<img
				src={avatar}
				alt="user profile"
				width="105"
				height="94"
				class="overflow-hidden rounded-2xl"
			/>
		</div>

		<form class="grid gap-y-2">
			<div class="grid grid-cols-2 gap-x-2">
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
					<label for="username" class="text-grey-2 mb-0.5 block text-sm"> Username </label>
					<input
						type="text"
						id="username"
						name=""
						class="text-grey-3 w-full rounded-lg border border-[#D9D9D9] px-3 py-4 text-sm"
					/>
				</div>
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
							<img src={flag} alt="nigeria flag" width="18" height="18" />
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
								width="12"
								height="6"
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
			<div class="flex justify-center">
				<button
					class="bg-primary mt-3 flex w-fit items-center justify-center gap-x-2 rounded-full px-7 py-4 font-medium text-white"
				>
					Save Updates{' '}
					<img src={save} alt="" width="17" height="18" />
				</button>
			</div>
		</form>
	</section>
</article>
