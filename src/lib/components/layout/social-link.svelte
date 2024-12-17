<script lang="ts">
	import skype from '$lib/public/icons/skype.svg';
	import instagram from '$lib/public/icons/instagram.png';
	import twitter from '$lib/public/icons/twitter.svg';
	import facebook from '$lib/public/icons/facebook.svg';
	import telegram from '$lib/public/icons/telegram.svg';
	import musicWorld from '$lib/public/images/music-world.jpg';
</script>

<section
	class="flex items-center justify-center gap-x-4 bg-cover bg-center bg-no-repeat py-2.5 lg:justify-end lg:px-[6.25rem]"
	style="background-image: url({musicWorld});"
>
	<a href="/">
		<img width={18} height={18} src={telegram} alt="Telegram icon" class="h-[18px] w-[18px]" />
	</a>
	<a href="/">
		<img width={18} height={18} src={skype} alt="Skype icon" />
	</a>
	<a href="/">
		<img width={18} height={18} src={instagram} alt="Instagram icon" />
	</a>
	<a href="/">
		<img width={18} height={18} src={twitter} alt="Twitter icon" />
	</a>
	<a href="/">
		<img width={18} height={18} src={facebook} alt="Facebook icon" />
	</a>
</section>
