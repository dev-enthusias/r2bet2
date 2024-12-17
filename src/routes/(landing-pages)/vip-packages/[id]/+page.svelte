<script lang="ts">
	import card from '$lib/public/icons/buy-card.svg';
	import arrow from '$lib/public/icons/arrow.svg';
	import bank from '$lib/public/icons/bank.svg';
	import master from '$lib/public/logo/mastercard.png';
	import visa from '$lib/public/logo/visa.png';
</script>

<main class="grid gap-y-7 bg-[#F5F5F5] px-48 py-12">
	<div class="mb-3 font-medium text-[#B3B3B3]">
		<a href="/"> Home {'>'}</a>{' '}
		<a href="/vip-packages"> VIP Pricing {'>'}</a>{' '}
		<span class="text-primary"> SUPER PLAN</span>
	</div>

	<section class="flex flex-col items-center rounded-[10px] bg-white py-3.5">
		<h2 class="mb-2.5 text-2xl font-bold text-black">SUPER PLAN {'>'} ONE WEEK</h2>
		<p class="text-primary text-lg font-bold">N1000 / 1 WEEK</p>
	</section>

	<section class="grid gap-x-5 lg:grid-cols-2">
		<article class="flex flex-col gap-y-5 rounded-[10px] bg-white px-6 py-7 text-center">
			<img src={card} alt="" width="62" height="62" class="mx-auto" />
			<div class="flex flex-col gap-y-5">
				<h3 class="border-b border-b-[#E9F2ED] pb-2 text-xl font-bold text-[#1E1E1E]">
					PAY WITH YOUR ATM OR BANK CARD
				</h3>
				<div
					class="mx-auto flex max-w-[255.66px] items-center justify-center gap-x-4 rounded-[7px] border-[1.71px] border-[#D9D9D9] py-3.5"
				>
					<img src={master} alt="master card logo" width="39.53" height="30.72" />
					<img src={visa} alt="visa card logo" width="69" height="30.72" />
					<img src={visa} alt="visa card logo" width="69" height="30.72" />
				</div>
				<p class="mx-auto max-w-[408px] text-center text-sm font-semibold text-[#1E1E1E]">
					Your account will be activated automatically after successful transaction
				</p>
			</div>

			<button
				class="mx-auto flex w-fit items-center justify-center gap-x-2 rounded-full bg-[#2F80ED] px-11 py-2.5 font-medium text-white"
			>
				Pay Now - N1,000.00 <svg
					width="18"
					height="19"
					viewBox="0 0 18 19"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						opacity="0.5"
						d="M9.10645 17.6397C11.2282 17.6397 13.263 16.7969 14.7633 15.2966C16.2636 13.7963 17.1064 11.7614 17.1064 9.63971C17.1064 7.51798 16.2636 5.48315 14.7633 3.98286C13.263 2.48256 11.2282 1.63971 9.10645 1.63971"
						stroke="white"
						stroke-width="1.5"
						stroke-linecap="round"
					/>
					<path
						d="M1.10645 9.63971H11.1064M11.1064 9.63971L8.10645 6.63971M11.1064 9.63971L8.10645 12.6397"
						stroke="white"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
		</article>
		<article class="flex flex-col gap-y-5 rounded-[10px] bg-white px-6 py-7">
			<img src={bank} alt="" width="62" height="62" class="mx-auto" />
			<div class="flex flex-col gap-y-5">
				<h3 class="border-b border-b-[#E9F2ED] pb-2 text-xl font-bold text-[#1E1E1E]">
					BANK PAYMENT / MOBILE TRANSFER
				</h3>
				<div class="p-x space-y-2 bg-[#F5F5F5] p-3 text-xs">
					<div class="flex">
						<p class="w-32 shrink-0">Acct Name:</p>
						<p class="text-primary font-bold">Gabriel Linus Edward</p>
					</div>
					<div class="flex">
						<p class="w-32 shrink-0">Acct No:</p>
						<p class="text-primary font-bold">2407541889</p>
					</div>
					<div class="flex">
						<p class="w-32 shrink-0">Bank:</p>
						<p class="text-primary font-bold">Zenith Bank</p>
					</div>
				</div>
				<div class="space-y-5 text-xs font-medium">
					<p>
						After Successful transaction, Kindly Forward us a mail containing “Your R2bet <span
							class="font-bold text-[#FF3B30]">Account Email</span
						>, <span class="font-bold text-[#FF3B30]">Amount Paid</span> and
						<span class="font-bold text-[#FF3B30]">Teller Number</span>, to
						<span class="text-primary font-bold">contact@r2bet.com</span>
						or through WhatsApp to
						<span class="font-bold">+2347042515742</span>
					</p>

					<p>Mobile transfer is also accepted.</p>

					<p>Your account will be activated once we receive your payment.</p>
				</div>
			</div>
		</article>
	</section>

	<section class="bg-[#d9d9d9] px-6 py-3.5">
		<h2 class="mb-2.5 text-2xl font-bold text-black">DISCLAIMER:</h2>
		<p class="text-sm text-[#1E1E1E]">
			The information transmitted is intended only for the persons or entity above the age of 18.
			R2bet do not refund cash paid for subscription and not liable to any money lost or gained.
			Countries that soccer staking is not legal should not subscribe to our plans. You can read
			through Our Disclaimer for more information on r2bet.
		</p>
	</section>
</main>
