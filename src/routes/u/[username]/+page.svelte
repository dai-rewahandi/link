<script>
	import { Avatar, Card, Listgroup } from 'flowbite-svelte';
	import { ArrowRightAltSolid } from 'flowbite-svelte-icons';

	let { data } = $props();
	$inspect(data);
</script>

<div class="container grow flex items-center justify-center">

<Card class="p-4 md:p-6 xl:p-8">
	<h3 class="font-semibold text-lg">My List</h3>
	<listGroup>
		{#if data.data?.link}
			{#each data.data?.link as links}
				<div class="flex items-center space-x-6 py-2 rtl:space-x-reverse">
					<Avatar src={links.brand} alt="sosial" />
					<div class="min-w-0 flex-1">
						<p class="truncate text-sm font-medium text-gray-900 dark:text-white">
							{links.name}
						</p>
						<p class="truncate text-sm text-gray-500 dark:text-gray-400">
							{links.link}
						</p>
					</div>
					<div class="inline-flex items-center text-base">
						<a href={links.link} target="_blank" class="p-4 hover:text-primary-500 hover:bg-primary-300 hover:rounded-full">
							<ArrowRightAltSolid />
						</a>
					</div>
				</div>
			{/each}
		{:else}
			<p>no data</p>
		{/if}
	</listGroup>
</Card>
</div>
