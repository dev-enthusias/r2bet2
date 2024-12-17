<script lang="ts">
	import Header from '$lib/components/layout/header.svelte';
	import logo from '$lib/public/logo/logo.svg';
</script>

<Header>
	<div class="flex items-center gap-x-2">
		<img src={logo} alt="r2bet logo" width={40} height={42.72} />
		<h1 class="text-4xl font-bold text-white">Privacy Policy</h1>
	</div>
</Header>

<main class="grid gap-y-7 bg-[#F5F5F5] px-48 py-12">
	<section class="white-container">
		<h2 class="text-primary mb-7 border-b border-[#E9F2ED] pb-1 text-3xl font-bold">
			Privacy Policy
		</h2>

		<section class="text-sm text-[#1E1E1E]">
			<p class="text-base font-bold">
				Who we are:{' '}
				<span class="text-sm font-normal">
					Our website address is: <a href="/">https://r2bet.com</a>
				</span>
			</p>

			<p class="my-5">What personal data we collect and why we collect it</p>

			<ul class="mb-10 ml-4 list-disc space-y-5">
				<li>
					<h3 class="mb-5 text-base font-bold">Comments</h3>
					<ul class="ml-4 list-disc">
						<li>
							When visitors leave comments on the site (blog page) we collect the data shown in the
							comments form, and also the visitor’s IP address and browser user agent string to help
							spam detection.
						</li>
					</ul>
				</li>
				<li>
					<h3 class="mb-5 text-base font-bold">Media</h3>
					<ul class="ml-4 list-disc">
						<li>
							If you upload images to the website, you should avoid uploading images with embedded
							location data (EXIF GPS) included. Visitors to the website can download and extract
							any location data from images on the website.
						</li>
					</ul>
				</li>
				<li>
					<h3 class="mb-5 text-base font-bold">Cookies</h3>
					<ul class="ml-4 list-disc space-y-4">
						<li>
							If you leave a comment on our site (blog page) you may opt-in to saving your name,
							email address and website in cookies. These are for your convenience so that you do
							not have to fill in your details again when you leave another comment. These cookies
							will last for one year.
						</li>
						<li>
							If you visit our login page, we will set a temporary cookie to determine if your
							browser accepts cookies. This cookie contains no personal data and is discarded when
							you close your browser.
						</li>
					</ul>
				</li>
				<li>
					<h3 class="mb-5 text-base font-bold">Embedded content from other websites</h3>
					<ul class="ml-4 list-disc space-y-5">
						<li>
							Articles on this site may include embedded content (e.g. videos, images, articles,
							etc.). Embedded content from other websites behaves in the exact same way as if the
							visitor has visited the other website.
						</li>
						<li>
							These websites may collect data about you, use cookies, embed additional third-party
							tracking, and monitor your interaction with that embedded content, including tracking
							your interaction with the embedded content if you have an account and are logged in to
							that website.
						</li>
					</ul>
				</li>
				<li>
					<h3 class="mb-5 text-base font-bold">What we do with the information we gather</h3>
					<ul class="ml-4 list-disc space-y-5">
						<li>
							We require the information described above to understand your needs and provide you
							with a better service, and in particular for the following reasons:
						</li>
						<li>We may use the information to improve our products and services.</li>
						<li>
							We may use the information to make sure that we are legally compliant in the
							information and advertisements that we display in specific countries
						</li>
					</ul>
				</li>
				<li>
					<h3 class="mb-5 text-base font-bold">How long we retain your data</h3>
					<ul class="ml-4 list-disc space-y-5">
						<li>
							If you leave a comment, the comment and its metadata are retained indefinitely. This
							is so we can recognize and approve any follow-up comments automatically instead of
							holding them in a moderation queue.
						</li>
						<li>
							For users that register on our website (if any), we also store the personal
							information they provide in their user profile. All users can see, edit, or delete
							their personal information at any time (except they cannot change their username).
							Website administrators can also see and edit that information.
						</li>
					</ul>
				</li>
				<li>
					<h3 class="mb-5 text-base font-bold">What rights you have over your data</h3>
					<ul class="ml-4 list-disc space-y-5">
						<li>
							If you have an account on this site, or have left comments, you can request to receive
							an exported file of the personal data we hold about you, including any data you have
							provided to us. You can also request that we erase any personal data we hold about
							you. This does not include any data we are obliged to keep for administrative, legal,
							or security purposes.
						</li>
					</ul>
				</li>
				<li>
					<h3 class="mb-5 text-base font-bold">Where we send your data</h3>
					<ul class="ml-4 list-disc space-y-5">
						<li>Visitor comments may be checked through an automated spam detection service.</li>
					</ul>
				</li>
			</ul>

			<section>
				<h3 class="mb-5 text-base font-bold">Google Adsense</h3>
				<div class="space-y-5">
					<p>
						These third-party ad servers or ad networks use technology to the advertisements and
						links that appear on www.r2bet.com send directly to your browsers. They automatically
						receive your IP address when this occurs. Other technologies (such as cookies,
						JavaScript, or Web Beacons ) may also be used by the third-party ad networks to measure
						the effectiveness of their advertisements and / or to personalize the advertising
						content that you see. r2bet.com has no access to or control over these cookies that are
						used by third-party advertisers.
					</p>
					<p>
						You should consult the respective privacy policies of these third-party ad servers for
						more detailed information on their practices as well as for instructions about how to
						opt-out of certain practices. r2bet.com’s privacy policy does not apply to, and we
						cannot control the activities of, such other advertisers or web sites. If you wish to
						disable cookies, you may do so through your individual browser options. More detailed
						information about cookie management with specific web browsers can be found at the
						browser’s respective websites.
					</p>
				</div>
			</section>
		</section>
	</section>
</main>
