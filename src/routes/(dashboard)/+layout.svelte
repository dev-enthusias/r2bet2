<script lang="ts">
	import Topbar from '$lib/components/layout/Topbar.svelte';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';

	let { children } = $props();
</script>

<div class="flex h-screen max-h-screen overflow-hidden">
	<Sidebar />
	<div class="no-scrollbar grow overflow-y-auto">
		<Topbar />
		<main class="min-h-[calc(100vh-72px)] bg-[#F5F5F5] px-10 py-7">
			{@render children()}
		</main>
	</div>
</div>
