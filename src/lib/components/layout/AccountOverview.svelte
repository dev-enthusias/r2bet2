<script lang="ts">
	import edit from '$lib/public//icons/edit.svg';
	import avatar from '$lib/public/images/avatar.png';
</script>

<article class="rounded-[10px] bg-white p-6">
	<h3 class="mb-5 border-b border-b-[#E9F2ED] pb-2 text-xl font-bold text-[#1E1E1E]">
		Account Overview
	</h3>
	<div class="mb-2.5 flex items-start gap-x-6">
		<img src={avatar} alt="user profile" width={104.93} height={94} />
		<ul class="grid gap-y-2.5 text-xs">
			<li class="grid grid-cols-2">
				<p>Full Names</p>
				<p>Ismail Ilami</p>
			</li>
			<li class="grid grid-cols-2">
				<p>Email Address</p>
				<p>r2bet.com</p>
			</li>
			<li class="grid grid-cols-2">
				<p>Phone Number</p>
				<p>+234 90 800 10 168</p>
			</li>
			<li class="grid grid-cols-2">
				<p>Date Registered</p>
				<p>24 Dec, 2024</p>
			</li>
			<li class="grid grid-cols-2">
				<p>Country/State</p>
				<p>Nigeria/Abuja</p>
			</li>
		</ul>
	</div>

	<button
		class="flex w-fit items-center gap-x-2 rounded-full bg-[#5a5a5a] px-7 py-2.5 text-sm font-bold text-white"
	>
		Edit Profile{' '}
		<img src={edit} alt="" width={24} height={24} />
	</button>
</article>
