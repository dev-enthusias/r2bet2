<script lang="ts">
	import logo from '$lib/public/logo/logo-gradient.png';
	import logout from '$lib/public/icons/logout.svg';
	import { page } from '$app/stores';

	let path;

	$: path = $page.url.pathname;
</script>

<aside class="flex w-[240px] shrink-0 flex-col gap-y-12 border-r border-r-[#D9D9D9] bg-white pt-10">
	<div class="flex items-center justify-center">
		<img src={logo} alt="r2bet logo" width="127" height="38.54" />
	</div>
	<div class="flex grow flex-col justify-between pr-3.5">
		<div>
			<ul class="navlinks mb-4 grid gap-y-2.5 border-b border-b-[#D9D9D9] pb-5">
				<li class="py-0.5">
					<a href="/dashboard" class:active={path === '/dashboard'}>
						<svg
							width="20"
							height="21"
							viewBox="0 0 20 21"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.707 0.832825L19.707 9.83283C20.337 10.4628 19.891 11.5398 19 11.5398H18V17.5398C18 18.3355 17.6839 19.0985 17.1213 19.6611C16.5587 20.2238 15.7956 20.5398 15 20.5398H14V13.5398C14 12.7746 13.7077 12.0383 13.1827 11.4816C12.6577 10.9248 11.9399 10.5897 11.176 10.5448L11 10.5398H8.99998C8.20433 10.5398 7.44127 10.8559 6.87866 11.4185C6.31605 11.9811 5.99998 12.7442 5.99998 13.5398V20.5398H4.99998C4.20433 20.5398 3.44127 20.2238 2.87866 19.6611C2.31605 19.0985 1.99998 18.3355 1.99998 17.5398V11.5398H0.999978C0.109978 11.5398 -0.337022 10.4628 0.292978 9.83283L9.29298 0.832825C9.48051 0.645354 9.73481 0.540039 9.99998 0.540039C10.2651 0.540039 10.5195 0.645354 10.707 0.832825ZM11 12.5398C11.2652 12.5398 11.5195 12.6452 11.7071 12.8327C11.8946 13.0203 12 13.2746 12 13.5398V20.5398H7.99998V13.5398C8.00001 13.2949 8.08993 13.0585 8.25269 12.8755C8.41545 12.6924 8.63973 12.5755 8.88298 12.5468L8.99998 12.5398H11Z"
								fill="#2C2C2C"
							/>
						</svg>

						Home
					</a>
				</li>
				<li class="py-0.5">
					<a
						href="/dashboard/my-account"
						class:active={path.startsWith('/dashboard/my-account') &&
							(path.length === '/dashboard/my-account'.length ||
								path['/dashboard/my-account'.length] === '/' ||
								path['/dashboard/my-account'.length] === '?')}
					>
						<svg
							width="24"
							height="25"
							viewBox="0 0 24 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 10.54C14.2091 10.54 16 8.74918 16 6.54004C16 4.3309 14.2091 2.54004 12 2.54004C9.79086 2.54004 8 4.3309 8 6.54004C8 8.74918 9.79086 10.54 12 10.54Z"
								fill="#1E7F48"
							/>
							<path
								d="M20 18.04C20 20.525 20 22.54 12 22.54C4 22.54 4 20.525 4 18.04C4 15.555 7.582 13.54 12 13.54C16.418 13.54 20 15.555 20 18.04Z"
								fill="#1E7F48"
							/>
						</svg>

						My Account
					</a>
				</li>
				<li class="py-0.5">
					<a
						href="/dashboard/vip-prices"
						class:active={path.startsWith('/dashboard/vip-prices') &&
							(path.length === '/dashboard/vip-prices'.length ||
								path['/dashboard/vip-prices'.length] === '/' ||
								path['/dashboard/vip-prices'.length] === '?')}
					>
						<svg
							width="20"
							height="21"
							viewBox="0 0 20 21"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M18.092 12.866L18.285 10.972C18.388 9.96104 18.455 9.29404 18.402 8.87304H18.422C19.293 8.87304 20 8.12704 20 7.20704C20 6.28704 19.293 5.54004 18.421 5.54004C17.549 5.54004 16.842 6.28604 16.842 7.20704C16.842 7.62304 16.987 8.00404 17.226 8.29604C16.883 8.51904 16.434 8.99104 15.758 9.70104C15.238 10.248 14.978 10.521 14.688 10.564C14.5269 10.587 14.3626 10.5627 14.215 10.494C13.947 10.37 13.768 10.032 13.411 9.35504L11.527 5.79004C11.307 5.37304 11.122 5.02404 10.955 4.74304C11.638 4.37504 12.105 3.62604 12.105 2.76304C12.105 1.53404 11.163 0.540039 10 0.540039C8.837 0.540039 7.895 1.53504 7.895 2.76204C7.895 3.62604 8.362 4.37504 9.045 4.74204C8.878 5.02404 8.694 5.37304 8.473 5.79004L6.59 9.35604C6.232 10.032 6.053 10.37 5.785 10.495C5.63744 10.5637 5.47312 10.588 5.312 10.565C5.022 10.522 4.762 10.248 4.242 9.70104C3.566 8.99104 3.117 8.51904 2.774 8.29604C3.014 8.00404 3.158 7.62304 3.158 7.20604C3.158 6.28704 2.45 5.54004 1.578 5.54004C0.708 5.54004 0 6.28604 0 7.20704C0 8.12704 0.707 8.87304 1.579 8.87304H1.598C1.544 9.29304 1.612 9.96104 1.715 10.972L1.908 12.866C2.015 13.917 2.104 14.917 2.214 15.818H17.786C17.896 14.918 17.985 13.917 18.092 12.866ZM8.855 20.54H11.145C14.13 20.54 15.623 20.54 16.619 19.6C17.053 19.188 17.329 18.448 17.527 17.484H2.473C2.671 18.448 2.946 19.188 3.381 19.599C4.377 20.54 5.87 20.54 8.855 20.54Z"
								fill="#2C2C2C"
							/>
						</svg>

						VIP Prices
					</a>
				</li>
			</ul>

			<section class="pl-3.5">
				<h3 class="font-inter mb-2.5 text-xs text-[#5A5A5A]">Tips Stores</h3>
				<ul class="rounded-lg bg-[#FDBE112B]">
					<li class="flex items-center justify-between p-3 text-xs font-bold text-[#1E1E1E]">
						FREE TIPS{' '}
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="-mr-0.5 h-4 w-4 -rotate-90"
						>
							<path
								d="M6 9L12 15L18 9"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</li>
					<li class="flex items-center justify-between p-3 text-xs font-bold text-[#1E1E1E]">
						SUPER VIP{' '}
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="-mr-0.5 h-4 w-4 -rotate-90"
						>
							<path
								d="M6 9L12 15L18 9"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</li>
					<li class="flex items-center justify-between p-3 text-xs font-bold text-[#1E1E1E]">
						PREMIUM VIP{' '}
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="-mr-0.5 h-4 w-4 -rotate-90"
						>
							<path
								d="M6 9L12 15L18 9"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</li>
					<li class="flex items-center justify-between p-3 text-xs font-bold text-[#1E1E1E]">
						MEGA VIP{' '}
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="-mr-0.5 h-4 w-4 -rotate-90"
						>
							<path
								d="M6 9L12 15L18 9"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</li>
				</ul>
			</section>
		</div>

		<section class="border-t border-[#D9D9D9] px-8 py-4">
			<button class="font-inter flex items-center gap-x-4 text-sm text-[#333333]">
				<img src={logout} alt="" width="24" height="24" />
				Logout
			</button>
		</section>
	</div>
</aside>

<style lang="postcss">
	.navlinks li a {
		@apply flex items-center gap-x-2.5 rounded-full rounded-br-[20px] rounded-tr-[20px] border-l-[6px] border-transparent py-2.5 pl-7 text-sm;
	}

	.navlinks li a.active {
		@apply border-primary text-primary rounded-lg bg-[#E9F2ED];
	}
</style>
