<script lang="ts">
	import bell from '$lib/public/icons/bell.svg';
	import avatar from '$lib/public/images/avatar.png';
</script>

<header class="flex h-[72px] items-center justify-end gap-x-12 px-10">
	<button class="relative">
		<img src={bell} alt="" sizes="40px" width={17.23} height={18} class="object-cover" />
		<div class="absolute -top-1.5 left-2 h-2.5 w-2.5 rounded-full bg-[#E84747]"></div>
	</button>
	<div class="relative h-10 w-10 overflow-hidden rounded-full">
		<img src={avatar} alt="" sizes="40px" class="object-cover" />
	</div>
</header>
