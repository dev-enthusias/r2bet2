<script lang="ts">
	import Header from '$lib/components/layout/header.svelte';
	import logo from '$lib/public/logo/logo.svg';
	import accountPlus from '$lib/public/icons/account-plus.svg';
	import door from '$lib/public/icons/door.svg';
	import flag from '$lib/public/icons/flag.svg';
</script>

<Header>
	<div class="flex items-center gap-x-2">
		<img src={logo} alt="r2bet logo" width={40} height={42.72} />
		<h1 class="text-4xl font-bold text-white">How to Play</h1>
	</div>
	<p class="my-4 text-xl font-medium text-white">
		R2bet.com is a free football prediction tips website and the best of it kind.
	</p>
	<div class="flex gap-x-4">
		<a
			href="/register"
			class="flex gap-x-2 rounded-full border border-white bg-transparent px-6 py-2.5 text-sm font-medium text-white"
		>
			Create Account{' '}
			<img src={accountPlus} alt="" width={22} height={16} />
		</a>
		<a
			href="/login"
			class="bg-primary flex items-center justify-center gap-x-2 rounded-full px-11 py-2.5 font-medium text-white"
		>
			Login <img src={door} alt="" width={24} height={24} />
		</a>
	</div>
</Header>
<main class="grid gap-y-7 bg-[#F5F5F5] px-48 py-12 text-sm text-[#1E1E1E]">
	<section class="rounded-[10px] bg-white py-6">
		<h2 class="mb-2.5 text-center text-2xl font-bold text-[#1E1E1E]">Set Your Country</h2>

		<article class="mx-auto w-full max-w-[752px] rounded-xl bg-[#F5F5F5] px-5 py-6">
			<div>
				<label for="country" class="mb-6 block text-lg font-bold text-[#1E1E1E]">
					Please kindly choose your country:
				</label>
				<div class="flex items-center gap-x-2 rounded-lg bg-[#CDCDCD] px-2.5 py-3.5">
					<img src={flag} alt="" width={24} height={24} class="shrink-0" />
					<select
						name=""
						id="country"
						class="grow appearance-none bg-transparent font-medium text-[#333333] focus:border-none focus:outline"
					>
						<option value="">United States</option>
					</select>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="h-[1.125rem] w-[1.125rem] shrink-0"
					>
						<path
							d="M7 10L12 15L17 10"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
			</div>
			<p class="mt-5 text-sm">
				Select from our available plans below ensuring a perfect match for your needs.
			</p>
		</article>
	</section>
	<section class="white-container space-y-10 text-sm">
		<section>
			<h2 class="mb-3 text-xl font-bold">Step-By-Step Approach</h2>
			<ul class="ml-5 list-decimal">
				<li>
					<span class="font-bold"> Register with &quot;A VALID EMAIL ADDRESS&quot;: </span>{' '}
					The first thing you need to do is to register your profile on the website by clicking on the
					&quot;Register Here&quot; link, located at the head section of the website pages. Fill the
					form.
				</li>
				<li>
					Login into your account after registering. Click on the &quot;See Pricing&quot; button
					under Current Plan, Then select any of the plans you wish to pay for on the next page and
					proceed.
				</li>
			</ul>
			<p class="mt-3">
				Listed below are the different methods of payment available for your country:
			</p>
		</section>
		<section>
			<h2 class="mb-3 text-xl font-bold">Pay via SKRILL</h2>
			<div class="space-y-3">
				<p>All payments should be made ONLY to errantsunday@gmail.com</p>
				<p>
					After successful transaction, send us an email containing: Your Email Address, Amount Paid
					and Transaction ID to Contact@R2bet.Com or through WhatsApp to +2347042515742
				</p>
				<p>Your R2bet account will be upgraded before the close of working hours.</p>
			</div>
		</section>
		<section>
			<h2 class="mb-3 text-xl font-bold">Pay via Bitcoin</h2>
			<div class="space-y-3">
				<p>All payments should be made ONLY to 18p65iFwnBSioCSpPJkTED9YEEJ99s1atN</p>
				<p>
					After successful transaction, send us an email containing, Your Email Address, The Date of
					Payment, and Transaction hash code to Contact@R2bet.Com or through WhatsApp to
					+2347042515742
				</p>
				<p>Your R2bet account will be upgraded before the close of working hours.</p>

				<div>
					<p>Q: How much does your subscription plan cost?</p>
					<p>
						<span class="font-bold">Answer:</span> You can find all our pricing plans here
					</p>
				</div>

				<div>
					<p>Q: How guaranteed are your games?</p>
					<p>
						<span class="font-bold">Answer:</span> We have a team of top notched well researched/informed
						experts that score over 85% in their accuracy rate. You are guaranteed of making substantial
						profits.
					</p>
				</div>

				<div>
					<p>Q: What is the difference between Basic and Premium plan?</p>
					<p>
						<span class="font-bold">Answer:</span> You can find that here
					</p>
				</div>

				<div>
					<p>Q: What happens for failed predictions?</p>
					<p>
						<span class="font-bold">Answer:</span> You do not get refunds for failed predictions rather
						our team of experts take note of the failed predictions and ensure you get better predictions
						the next day.
					</p>
				</div>

				<p>
					Remember you have unlimited access to the information provided by our experts over a
					specific period of days and as such should be able to re-coup any losses incurred due to
					any unforeseen occurrences/upsets.
				</p>

				<div>
					<p>Q: How do I get these daily games sent to me?</p>
					<p>
						<span class="font-bold">Answer:</span> We post games on our platform (R2bet.com), you need
						to login on the website using your email and password or through social accounts to view
						games.
					</p>
				</div>
			</div>
		</section>
	</section>
</main>
